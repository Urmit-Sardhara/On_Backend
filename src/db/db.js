const mongoose = require("mongoose")

async function connectDB(){

await mongoose.connect("mongodb+srv://sardharaurmit_db_user:6M2nSlLnwNm79Dwz@cluster0.15ftpme.mongodb.net/note_db")

console.log("connected");
}

module.exports = connectDB