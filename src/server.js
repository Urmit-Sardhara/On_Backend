const app =require("./app");


const note=[]; 

 // send the data 

app.post("/note",(req, res)=>{
    console.log(req.body);
  
    
    note.push(req.body);
    res.status(201).json({
        message:"note is add"
    })    

})

// fetch the data 

app.get("/note",(req,res)=>{

    res.status(200).json({
    message :"done ",
        note:note
    
    })
})

//delete the data 

app.delete("/note/:index",(req,res)=>{

    const index = req.params.index
    if(index<0||index>=note.length){
       return res.status(404).json({
            
            message:"not found"
        })
    }
   
    note.splice(index, 1)
        res.status(200).json({
        message:"done "
        })
    
})
// update the existing data
app.patch("/note/:index",(req,res)=>{
    const index=req.params.index
    if(index<0|| index>=note.length){
        return res.status(404).json({
            message:"not found"
        })
    }
    const Age = req.body.age
    note[index].age=Age
    
    res.status(200).json({
        message:"updated"
    })

})

app.listen(3000,()=>{
    console.log("server is runnig ");
    
})
