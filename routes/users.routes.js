var express = require('express');
var router = express.Router();

const userController = require('../controller/users');

/* GET users listing. */
router.get('/login',userController.getLoginCreate);
//  lay du lieu khi gui tu form
router.post('/login', userController.postLoginCreate);

router.get('/signup', userController.getUserCreate);
router.post('/signup', userController.postUserCreate);

router.get('/logout', function(req, res, next) {
  res.send('Day la trang thoat khoi he thong');
});


module.exports = router;