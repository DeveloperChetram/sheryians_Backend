const express = require('express')
const connectToDB = require('./src/db/db')
const app = express();
const cors = require('cors');
connectToDB()

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})

