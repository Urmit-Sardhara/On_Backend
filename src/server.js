require("dotenv").config()
const { get } = require("mongoose")
const app = require ("./app.js")
const connectDB = require("./db/db.js")
const noteModel = require("./models/note.model")


connectDB()

app.get("/",(req ,res)=>{              // for test display
   res.send("hello server")
})


app.post("/note",async(req,res)=>{        // for add new data 
    const data = req.body
   await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({message:"created"})
})


app.get("/note",async(req,res)=>{       // for look data or fetch data 
try{
    const notes = await noteModel.find()
    res.status(200).json({
        note:notes
    })
}
catch(err) {
    res.status(500).json({
        message:"data is not find",
        err:err.message
        

    })

}
    
})
app.delete("/note/:num", async(req,res)=>{         // for delete data 
        const num= req.params.num
        try{
        const deleteData = await noteModel.findByIdAndDelete(num)
            
            if(!deleteData){
              return  res.status(401).json({message:"note is not delete "})

            }
            res.status(200).json({message:"note is deleted"})
        }
        catch(err){
            res.status(500).json({message:"not work"})
            console.log(err.message);
            
        }
})  
    
app.patch("/note/:num",async (req,res)=>{
    const num = req.params.num
    const data = req.body.description
    try{
      await noteModel.findOneAndUpdate({_id:num},{description:data})
      res.status(200).json({message:"done"})
    }
    catch(err){
        res.status(400).json({
            message:"note delete",
            
        } )
        console.log(err.message);
        
    }
})



app.listen(3000,()=>{
    console.log("server is runig ");
    
})