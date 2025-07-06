const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
    res.send("welcome to homepage")
})

app.listen(3000,()=>{
    console.log("server is running at port :3000")
})