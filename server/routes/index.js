var express = require('express');
var router = express.Router();
const {AddUser,Login} = require('../controllers/user.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/register',AddUser)

router.post('/login',Login)

module.exports = router;
