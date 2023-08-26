// This application is made to read and write a JSON file from local database 
// Local applicaion for Employee database is made using JSON file.

// Declaration for libraries used in the app
const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require("body-parser")
const { response } = require('express')
const { finished } = require('stream')
const { execPath } = require('process')
const github = require('@actions/github');

const app = express()
const port = 3000

app.use(express.static('./public')) // This line is used for declaring the home directory
app.use(express.json()); // This code required to accept data in json format 
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/login.html'); // Employee Data base Application
  // res.sendFile(__dirname+'/views/test.html'); // Employee Data base Application


});

app.get('/images/logo.png', function (req, res) {
  res.sendFile(__dirname + '/public/img/Logo.png'); // Employee Data base Application

});

app.get('/images/refinery.jpg', function (req, res) {
  res.sendFile(__dirname + '/public/img/refinery.jpg'); // Employee Data base Application

});


app.post('/auth', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (username == "nmdinst" && password == "inst") {
    res.redirect('/home');
  } else {
    res.end();
  }

});
// Send the Main web page

app.get('/home', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Send JSON data file to webpage
app.get('/data', function (req, res) {
  res.sendFile(__dirname + '/data.json'); // This line is used to send json data to html file
});

app.post('/api', function (req, res) {
  var data = fs.readFileSync(__dirname + '/data.json'); // Binary Data 
  var words = JSON.parse(data); // Binary to JSON
  words['employees'].push(req.body); // Appending data on JSON file from web page
  fs.writeFile(__dirname + "/data.json", JSON.stringify(words, null, 2), finished); // Writing appended data to JSON file

  //Code for updating Github 


  //Code ends for updating Github

  function finished(err) {
    console.log('Finished:' + err); // Check for any error while writing data to JSON file
  }
});

app.post('/add', function (req, res) {
  var data = fs.readFileSync(__dirname + '/data.json'); // Binary Data 
  var words = JSON.parse(data); // Binary to JSON
  var datafrmPage = req.body; // Get post data from webpage
  var rowno = datafrmPage.rowno; //Get row number from the JSON array 
  delete datafrmPage.rowno; //Delete the last rowno from the object
  words['NMD'].splice(rowno, 1, datafrmPage);
  fs.writeFile(__dirname + "/data.json", JSON.stringify(words, null, 2), finished); // Writing appended data to JSON file
  function finished(err) {
    console.log('Finished: adding the data :' + err); // Check for any error while writing data to JSON file
  }

});

app.post('/delete', function (req, res) {
  var data = fs.readFileSync(__dirname + '/data.json'); // Binary Data 
  var words = JSON.parse(data); // Binary to JSON
  console.log("Delete:" + req.body);
  delete words['NMD'][req.body];
  // This function is used to remove null (undefined) charater from JSON data
  // console.log(req.body[0]);
  var filtered = words['NMD'].filter(function (el) {
    return el != null;
  });
  // filtered data is put in JSON form 
  var final = {
    "NMD": filtered
  }
  fs.writeFile(__dirname + "/data.json", JSON.stringify(final, null, 2), finished); // Writing appended data to JSON file
  function finished(err) {
    console.log('Finished: Deleting activity :' + err); // Check for any error while writing data to JSON file
  }
});


// Code for updating the Github JSON Files 






app.listen(port, function (req, res) {
  console.log('Server is running on:' + port); // express server listening on port no 3000
});



