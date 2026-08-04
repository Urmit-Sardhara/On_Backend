const app = require ("./app.js")
const connect =require ("./db/db.js")

connect()

const server = app


server.listen (3000,()=>{
    console.log("server is running ");
    
})