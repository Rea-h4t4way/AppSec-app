const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet")

const login = require('./lib/login');
const logout = require('./lib/logout');
const { readProfile, saveProfile } = require('./lib/profile');

const app = express();
app.use(helmet())
/*
app.use(
  helmet.referrerPolicy({
    policy: "no-referrer",
  })
)
*/
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', login);
app.get('/logout', logout);
app.get('/profile', readProfile);
app.post('/profile', saveProfile);

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
})
