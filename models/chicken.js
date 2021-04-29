const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema


const chickenSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        maxLength : 100,
        trim : true
    },
    birthday : {
        type : Date,
        require : true
    },
    weight : {
        type : Number,
        require : true
    },
    steps : {
        type : Number,
        default : 0
    },
    farmyard : {
        type : ObjectId,
        ref : 'Farmyard'
    },
    isRunning : {
        type : Boolean,
        default : false
    }
}, {timestamps : true })


chickenSchema.methods = {
    updateSteps : function(){
        if(this.isRunning === true ){
            this.steps += 1;
        }
    }
}
module.exports = mongoose.model('Chicken', chickenSchema);