require('dotenv').config()
const express = require('express')
const app = express()

const port = 5000

app.get('/', (req,res)=>{
    res.send('Hello World !')
})

app.get('/twitter', (req,res)=>{
    res.send('pawankamal16')
})

app.get('/login', (req,res)=>{
    res.send('<h1>user logged in</h1>')
})

app.get('/instagram', (req,res)=>{
    res.send('<h2>This is my account</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`);
})