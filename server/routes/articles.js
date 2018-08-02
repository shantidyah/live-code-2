var express = require('express');
var router = express.Router();
const {AddArticle,List,ListbyUser,Delete,Update,Category} = require('../controllers/article.js')


router.get('/',List)
router.get('/:author',ListbyUser)
router.put('/edit/:id',Update)
router.delete('/delete/:id',Delete)
router.post('/add',AddArticle)
router.get('/categories/:category',Category)




module.exports = router;
