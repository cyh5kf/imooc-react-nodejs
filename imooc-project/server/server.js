const express = require('express');
const userRouter = require('./user')
const app = express();

app.use('/user', userRouter)

app.listen(9093, function () { 
    console.log('node app start at port 9093');
})