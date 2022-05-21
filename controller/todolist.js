// import Model
const Todolist = require('../models/todolist');

// thêm
exports.getTodolistCreate = (req, res, next) => {
    res.render('./todolist/add');
}

// tạo mới todolist
exports.postTodolistCreate = (req, res, next) => {
    /* day la phan tao moi todolist */
    console.log("data gui tu form nhap len %j", req.body);
    var data = new Todolist();
    data.title = req.body.title;
    data.content = req.body.content;
    data.save(function (err){
        console.log(err);
        res.redirect('/');
    });
}
// xem chỉ tiết bài post
exports.getTodolistDetail=(req, res, next) =>{
    const ID=req.params.id;
    Todolist.findById(ID, function (err, adventure){
        res.render('./todolist/detail', {data: adventure});
    });              
}
// get thông tin update
exports.getTodolistupdate = (req, res, next) => {
    const ID = req.params.id;
    data = Todolist.todolistGetDetail(ID);
    res.render('./todolist/edit', {data: data});
}
// cap nhat
exports.postTodolistUpdate = (req, res, next) => {
    const ID = req.params.id;
    const data = req.body;
    Todolist.todolistUpdate(ID, data.title, data.content);
    res.redirect('/');
}

//xoa 
exports.getTodolistDelete = (req, res, next) => {
    const ID = req.params.id;
    const data = Todolist.todolistDelete(ID);
    res.render('./todolist/delete', {data: data});
}
// xoa voi method post
exports.postTodolistDelete=(req, res, next) =>{
    const ID = req.params.id;
    Todolist.todolistDelete(ID);
    res.redirect('/');
}
    //danh sach todolist
exports.listTodolist=(req, res, next) =>{
    // console.Log("chay toi day");
    if(req.session.email) {
        Todolist.get(function(err, data){
            if(err){
                console.log('co loi xay ra');
            }else{
                console.log(" du lieu query sj", data);
                res.render('index', {headLine: 'xin chao cac ban', tagLine: 'homenay la thu may', data:data});
            }
        });
    } else {
        res.redirect('users/login');
    }
    
}