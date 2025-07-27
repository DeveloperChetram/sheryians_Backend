const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
        unique:true,
    },
    password:String
})

const userModel = mongoose.model('user model', userSchema)

module.exports= userModel;