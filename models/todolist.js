/* viet lai voi db mongodb su dung mongoss*/
/* todolist (id, title, content) */
var mongoose=require('mongoose');
var todolistSchema=mongoose.Schema({

    
    title:{
         type: String,
         require: true
    },
    content:{
         type: String,
          require: true
    }
});
var TodolistModel = module.exports=mongoose.model('Todolist', todolistSchema);
module.exports.get = function(callback, limit){
    TodolistModel.find(callback).limit(limit);
}