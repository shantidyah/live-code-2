var express = require('express');
var router = express.Router();
const {List,ListbyId} = require('../controllers/user.js')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/',List)
router.get('/:id',ListbyId)


module.exports = router;
