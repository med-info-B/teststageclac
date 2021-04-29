const mongoose = require('mongoose');


const farmyard = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        maxLength : 100,
        trim : true
    }
}, {timestamps : true })



module.exports = mongoose.model('Farmyard', farmyard);