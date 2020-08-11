const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const database = {
    user: [
        {
            id: '123',
            namme: 'john',
            email: 'john@email.com',
            password: 'Minhtri1',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            namme: 'jenny',
            email: 'jenny@email.com',
            password: 'LOL',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.user);
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.user[0].email && req.body.password === database.user[0].password) {
        res.json('success')
    } else {
        res.status(400).json('log in failed')
    }
})

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, null, null, function(err, hash) {
        console.log(hash);
    });
    database.user.push({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        id: Math.random(),
        entries: 0,
        joined: new Date() 
    });
    res.json(database);
})

app.get('/profile/:id', (req, res) => {
    const  { id } = req.params;
    for (let i = 0; i < database.user.length; i++) {
        if ( id === database.user[i].id) {
            res.json(database.user[i]);
            break;
        } else if ( i === database.user.length-1 && id !== database.user[i].id) {
            res.json('No user found');
            break;
        }
    }
})

app.put('/image', (req, res) => {
    const  { id } = req.body;
    for (let i = 0; i < database.user.length; i++) {
        if ( id === database.user[i].id) {
            database.user[i].entries++;
            res.json(database.user[i]);
            break;
        } else if ( i === database.user.length-1 && id !== database.user[i].id) {
            res.json('No user found');
            break;
        }
    }
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