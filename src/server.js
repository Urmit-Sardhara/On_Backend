const app =require("./app");


const note=[]; 

app.post("/note",(req, res)=>{
    console.log(req.body);
  
    
    note.push(req.body);
    res.status(201).json({
        message:"note is add"
    })    

})

app.listen(3000,()=>{
    console.log("server is runnig ");
    
})