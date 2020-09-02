const mongoose = require('mongoose'); 

const SalaireModal = new mongoose.Schema({

    salaire:String,
    'salarier':{type:mongoose.Schema.Types.ObjectId,ref:'User'}, 
}); 

module.exports = mongoose.model('Salaire',SalaireModal); 