// This app was developed for making a chart in a container

const express = require('express') 
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.use(express.static('./public')) // This line is used for declaring the home directory
app.use(express.json()); // This code required to accept data in json format 






app.get('/',function(req,res){
    // res.sendFile(__dirname+'/views/excel2json.html');
    res.sendFile(__dirname+'/views/test.html');
});


app.listen(port,function(req,res){
    console.log('Server is running on:'+port); // express server listening on port no 3000
});