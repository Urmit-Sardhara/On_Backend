const mongoose = require("mongoose")
 
async function connect(){
 await mongoose.connect("mongodb+srv://sardharaurmit_db_user:6M2nSlLnwNm79Dwz@cluster0.15ftpme.mongodb.net/test")
 console.log("connected");
 
}
module.exports=connect

