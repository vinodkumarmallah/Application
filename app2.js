// This app was developed for making a chart in a container

const express = require('express') 
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.use(express.static('./public')) // This line is used for declaring the home directory
app.use(express.json()); // This code required to accept data in json format 


app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/tradingchart.html');
});

app.post('/data', function (req, res) {
    fs.writeFile(__dirname + "/historicData.json", JSON.stringify(req.body), finished); // Writing appended data to JSON file
    function finished(err) {
        console.log('Finished:' + err); // Check for any error while writing data to JSON file
    }
});

app.get('/:id',async function(req, res){
    const id = req.params.id;
    console.log(id);
    var data = fs.readFileSync(__dirname+'/historicData.json'); // Binary Data
    var array = JSON.parse(data);
    for (let i = 0; i < array.length; i++) {
        if(array[i][0]=id){
            return res.json(JSON.stringify(array[i][1]));
        }
    }      
});

app.listen(port,function(req,res){
    console.log('Server is running on:'+port); // express server listening on port no 3000
});