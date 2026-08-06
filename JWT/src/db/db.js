const mongoose = require("mongoose")
 
async function connect(){

try {
     await mongoose.connect(process.env.MONGO_uri)
 console.log("connected");
} catch (error) {
    console.log("data base is not connencted",error);
    
    
}
 
}
module.exports=connect

