const usermodel= require("../Model/model");

async function register(req,res) {
    const{username, email,password}=req.body;

    const user =await usermodel.create({
        username ,
        email,
        password
    })
    const token =Jwt.sign()
}
module.exports={register}