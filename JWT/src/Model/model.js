const mongoose = require ("mongoose")

const scema = new mongoose.Schema({
    name:String,
    age:Number,
})

const CRD_model = new mongoose.Model("test",scema)

module.exports=CRD_model;