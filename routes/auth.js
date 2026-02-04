var express = require('express');
var router = express.Router();

// Login GET
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

// Login POST
router.post('/login', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  
  // TODO: Validasi email dan password dengan database
  console.log('Email:', email);
  console.log('Password:', password);
  
  res.redirect('/');
});

// Register GET
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

// Register POST
router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var passwordConfirm = req.body.passwordConfirm;
  
  // TODO: Validasi dan simpan ke database
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Password Confirm:', passwordConfirm);
  
  res.redirect('/auth/login');
});

module.exports = router;
