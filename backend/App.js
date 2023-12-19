const express = require('express')
const App = express()
const mongoose = require('mongoose')
const MilmaRouter = require('./Router/IcereamRouter')
const cors = require('cors');



mongoose.connect("mongodb+srv://milma:milma@cluster0.acukpwg.mongodb.net/",{
})
.then(console.log("data base connected successfully"))
.catch((error)=>console.log("error:"+error))

App.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-allow-Methods','GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
});

App.use("/api/info", MilmaRouter)



App.listen(2319,(req,res)=>console.log("server started"))
