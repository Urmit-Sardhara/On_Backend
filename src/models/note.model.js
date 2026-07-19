    const mongoose = require("mongoose")

    const noteShcema=new mongoose.Schema({
        title:String,
        description:String,
    })

    const noteModel=mongoose.model("note",noteShcema)
    