const mongoose = require('mongoose');

const connectToDB =()=>{
    mongoose.connect('mongodb+srv://patelchetram49:chetram2025@cluster0.dfpfzh8.mongodb.net/cohort')
    .then(()=>{
        console.log("conneted to db")
    })
}

module.exports=connectToDB;
