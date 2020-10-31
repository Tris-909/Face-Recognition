const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

var db = require('knex')({
    client: 'pg',
    connection: {
     connectionString : process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
});



const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    const currentID = parseInt(req.query.id);
    db.select("*").from('users').where({id: currentID}).then((response) => {
        console.log(res);
        res.send(response[0]);
    }).catch((err) => {
        console.log(err);
    });
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
    if (!email || !name || !password) {
        return res.status(400).json('incorect form submission');
    }
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
        res.status(200).json(entries[0]);
    })
    .catch((err) => res.status(400).json(err));
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`worked on ${process.env.PORT}`);
});