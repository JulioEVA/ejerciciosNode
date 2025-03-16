const router = require('express').Router();
const user = require('../models/user');

router.get('/', (req, res) => {
  res.status(200).send(JSON.stringify(user));
});

router.post('/', (req, res) => {
  const { name, password, phone, email } = req.body;
  user.name = name;
  user.password = password;
  user.phone = phone;
  user.email = email;

  res.status(200).send(JSON.stringify(user));
});

router.put('/', (req, res) => {
  const { name, password, phone, email } = req.body;
  user.name = name;
  user.password = password;
  user.phone = phone;
  user.email = email;

  res.status(200).send(JSON.stringify(user));
});

router.delete('/', (req, res) => {
  user.name = '';
  user.password = '';
  user.phone = '';
  user.email = '';

  res.status(200).send(JSON.stringify(user));
});

module.exports = router;
