require('dotenv').config();
const express = require('express');
const connectDB = require('./db/db');
const userRouter = require('./routes/user.routes');
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser())
app.use(express.json());
connectDB()



app.get('/', (req, res) => {
  res.send('Hello from app.js');
});

app.use('/auth',userRouter)

module.exports = app;
