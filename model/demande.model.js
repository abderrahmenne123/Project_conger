const mongoose = require('mongoose'); 

const UserModal = new mongoose.Schema({
name: String, 
'salarier':{type:mongoose.Schema.Types.ObjectId,ref:'User'},
'supadmin':{type:mongoose.Schema.Types.ObjectId,ref:'User'},
comment:String,
date_depart:{type: Date},
date_retour:{type: Date }



}); 

module.exports =mongoose.model('Demande',UserModal); 
