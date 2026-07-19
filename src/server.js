const app = require ("./app.js")
const connectDB = require("./db/db.js")

connectDB()

// app.get("/",(req ,res)=>{
//    res.send("hello server")
// })

app.listen(3000,()=>{
    console.log("server is runig ");
    
})