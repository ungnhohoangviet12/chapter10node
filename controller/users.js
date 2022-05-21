const User = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);


/** xay dung cac ham xu li cho user */

exports.getLoginCreate = (req, res, next) => {
    res.render('./users/login');
}

exports.postLoginCreate = (req, res, next) => {
    console.log("day la phan lay du lieu login %j", req.body);
    User.findOne({email: req.body.email}, function(err,response){

        if(response) {
            //xu li so sanh mat khkau co dung khong
            const checkPassword = bcrypt.compareSync(req.body.password, response.password);

                if(checkPassword) {
                    req.session.email = response.email;
                    console.log('dang nhap thanh cong')
                    res.redirect('/');
                }else {
                    res.render('/users/login', err = "Sai mat khau");
                }
        } else {
            res.render('/users/login');
            console.log('khong tim thay du lieu phu hop');

        }
    })
}

exports.getUserCreate = (req, res, next) => {
    res.render('./users/signup');
}

exports.postUserCreate = (req, res, next) => {
    console.log("day la phan lay du lieu login %j", req.body);
    var data = new User();
    data.email = req.body.email;
    data.passowrd = bcrypt.hashSync(req.body.password, salt); // lay nhu the nay thi chua ma hoa
    data.save(function(err){
        res.redirect('/')
    })
}