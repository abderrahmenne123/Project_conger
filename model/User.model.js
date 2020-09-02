const mongoose = require('mongoose'); 

const UserModal = new mongoose.Schema({
'name': String, 
'firstName':String, 
'email':String, 
'password':String, 
'phone':Number,
'role':{type:mongoose.Schema.Types.ObjectId,ref:'Role'}


}); 

module.exports =mongoose.model('User',UserModal); 
