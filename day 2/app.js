const express = require('express')
const app = express()

app.listen(3000,()=>{
  console.log('Server is running on port 3000')
})

app.get('/home', (req,res)=>{
    res.status(200).send('Welcome to the home page')
})
app.get('/', (req,res)=>{
    res.send('Welcome to the server')
})