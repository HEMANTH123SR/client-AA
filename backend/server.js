const express =require('express')
const mongoose=require('mongoose')

require('dotenv').config()

const app=express()

// app.use('/A&A/api/',);

mongoose.connect(process.env.MONGO_URI)
.then(

    app.listen(process.env.PORT,()=>{
console.log(`db coonected && server listening at port http://localhost:${process.env.PORT}`)
    })
)
.catch( err => console.log({loc:"at db connection",err}))