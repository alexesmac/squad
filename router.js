var express = require('express');
var router = express.Router();

router.get('/', require('./routes/index'));
router.use('/login', require('./routes/login'));
router.use('/signup', require('./routes/signup'));
router.get('/home', require('./routes/home'));
router.use('/create', require('./routes/create'));
router.get('/find', require('./routes/find'));
router.use('/user', require('./routes/user'));
router.use('/squad', require('./routes/squad'));

module.exports = router;