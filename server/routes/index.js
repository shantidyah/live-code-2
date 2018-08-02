var express = require('express');
var router = express.Router();
const {AddUser,Login,validate} = require('../controllers/user.js')
const jwt = require('jsonwebtoken')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/register',AddUser)

router.post('/login',Login)

router.get('/validate',(req,res)=>{
    var decoded = jwt.verify(req.headers.token,  process.env.secret);
    res.json(decoded)
})

module.exports = router;
