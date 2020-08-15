const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

var db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Minhtri1',
      database : 'face_recognition'
    }
});



const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(req.body);
})

app.post('/signin', (req, res) => {
    db.select('email', 'hash').where('email', '=', req.body.email).from('login').then(data => {
        const valid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (valid) {
            db.select("*").from('users').where('email', '=', req.body.email).then(user => {
                res.json(user[0]);
            }).catch(() => res.status(400).json('Unable to get user'));
        } else {
            res.status(400).json('Wrong credentials');
        }
    }).catch(() => res.status(400).json('Wrong Credentials'));
})

app.post('/register', (req, res) => {
    const {email, name, password} = req.body;
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email,
        }).into('login').returning('email').then((loginemail) => {
            return trx('users').returning("*").insert({
                name: name, 
                email: loginemail[0], 
                joined: new Date()
            })
            .then(data => res.json(data[0]));
        }).then(trx.commit).catch(trx.rollback);
    }).catch(() => res.status(400).json('Unable to register a new user'));


})

app.get('/profile/:id', (req, res) => {
    const  { id } = req.params;
    db.select('*').from('users').where({ id: id }).then(user => {
        if (user.length) {
            res.status(200).json(user[0]);
        } else {
            res.status(400).json('User not found');
        }
    }).catch(() => res.status(400).json('Request Fail'));
})

app.put('/image', (req, res) => {
    const  { id } = req.body;
    db('users').where('id', '=', id).increment('entries', 1).returning('entries')
    .then((entries) => {
        console.log(entries);
        res.status(200).json(entries[0]);
    })
    .catch((err) => res.status(400).json(err));
})

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3001, () => {
    console.log('worked');
});