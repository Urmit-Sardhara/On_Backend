const express= require("express");
const { router } = require("../app");
const authcontroler =require("../Controllers/auth.controller")
const route= express.Router()

router.post("/register",authcontroler.register,(req,res)=>{

})

module.exports= route;