const express = require('express')

const app = express()
let notes = []

// /notes => title and description

// built-in  middleware to get data from req.body  
app.use(express.json()) 

app.post('/notes', (req,res)=>{
    // console.log(req.body)
    // res.send(req.body)
    notes.push(req.body)
    res.send({
        messege:"note added succusesfully",
        // notes:notes
    })
})


// show data on frontend
app.get("/notes",(req,res)=>{
    res.json(notes)
})

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    res.json("note deleted")
    delete notes[index]
    // notes.slice(index,1)

})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    notes[index].title= req.body.title;
    res.json("note updated")
})

app.listen(3000,()=>{
    console.log('server is running 3000')

})
