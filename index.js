const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


app.get('/',(req,res) =>{
    res.send('hello form FLY WORLD')
})

app.listen(port,()=>{
    console.log('Listening to port 5000');
})