
const express = require("express");

const App = express()

App.get("/",(req,res)=>{
   res.send("<h1>Weclome to backend server</h1>")
    //res.sendFile("D:\\HOPE\\fullstack prac\\interview\\test.html")

})
App.get("/static",(req,res)=>{
    res.sendFile("D:\\HOPE\\fullstack prac\\interview\\test.html")
})

const PORT=3001

App.listen(PORT,()=>{
    console.log("server started  successfully")
})

