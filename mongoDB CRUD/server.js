const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/notes.model')
const app = express()

connectToDB()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('server is running')

})

app.post('/notes', async (req, res)=>{
    const {title, content} = req.body


   const dbRes= await  noteModel.create({
     title,content
    })
        res.json({
        "messege":"note added successfully",
        "DataBase Response" : dbRes
    })
})

app.get('/notes', async (req, res)=>{
    // const {title, content} = req.body
    
    const notes = await noteModel.find()
    res.json(notes)
})

app.delete('/notes/:id', async (req, res)=>{
    // const {title, content} = req.body
    const id = req.params.id
    const notes = await noteModel.findOneAndDelete({
        _id:id
    })
    res.json({
        "messege" : "deleted",
         notes
    })
})

app.patch('/notes/:id', async (req, res)=>{
    const id = req.params.id;
    const{title}= req.body
   const dbRes = await noteModel.findOneAndUpdate({
        _id:id
    },{
        title:title
    })
    res.json({
        "messege":"note updated",
        dbRes
    })
})



app.listen(3000,()=>{
    console.log("server is running at 3000")
})