const mongoose = require('mongoose'); 

const UserModal = new mongoose.Schema({
name: String, 
'salarier':{type:mongoose.Schema.Types.ObjectId,ref:'User'},
comment:String,
date_depart:Date,
date_retour:Date



}); 

module.exports =mongoose.model('Demande',UserModal); 
