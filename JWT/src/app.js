const express = require("express")
const auth = require("./routes/auth.routes")
const app = express();

app.use(express.json())


app.use("/api/auth",auth)





module.exports =app