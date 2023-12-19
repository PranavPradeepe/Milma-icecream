const mongoose = require('mongoose')
const milmaSchema = new mongoose.Schema({

name:{
    type:String,
    require:true,
},
litter_box:{
    type:Number,
    require:true,
},
price:{
    type:Number,
    require:true,
},
category:{
    type:String,
    require:true,
},
image:{
    type:String,
    require:true,
}

})

const iceCream = mongoose.model("flavor",milmaSchema)
module.exports = iceCream;
