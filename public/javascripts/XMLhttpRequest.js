// API link for bank data
// https://api.moneycontrol.com/mcapi/v1/stock/get-stock-price?scIdList=UTI10%2CHDF01%2CICI02%2CSBI%2CIIB%2CBB09&scId=1
// {"success":1,"data":[{"companyName":"Axis Bank","lastPrice":"976.70","perChange":"-0.43","marketCap":"300,805.46","scTtm":"27.80","perform1yr":"48.40","priceBook":"2.53"},{"companyName":"HDFC Bank","lastPrice":"1,660.40","perChange":"-0.87","marketCap":"928,462.27","scTtm":"20.18","perform1yr":"18.96","priceBook":"3.72"},{"companyName":"ICICI Bank","lastPrice":"946.40","perChange":"-1.36","marketCap":"662,177.54","scTtm":"19.45","perform1yr":"27.55","priceBook":"4.26"},{"companyName":"SBI","lastPrice":"593.60","perChange":"0.19","marketCap":"529,764.96","scTtm":"9.52","perform1yr":"21.95","priceBook":"1.81"},{"companyName":"IndusInd Bank","lastPrice":"1,357.10","perChange":"-2.38","marketCap":"105,314.07","scTtm":"14.15","perform1yr":"57.62","priceBook":"2.44"},{"companyName":"Bandhan Bank","lastPrice":"230.25","perChange":"-0.20","marketCap":"37,089.97","scTtm":"16.91","perform1yr":"-17.65","priceBook":"2.13"}]}

// var getJSONdata = function (url, callback) { // How can I use this callback?
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200) {
//             callback(request.responseText); // Another callback here
//         }
//     };
//     request.open('GET', url, true);
//     request.send();

// }
// getJSONdata("https://api.moneycontrol.com/mcapi/v1/stock/get-stock-price?scIdList=UTI10%2CHDF01%2CICI02%2CSBI%2CIIB%2CBB09&scId=1",sendData)


// function sendData(data){
//     var a = JSON.parse(data);
//     // console.log(a.data);
//     for (let i = 0; i < a.data.length; i++) {
//         // console.log('Company Name: '+a.data[i].companyName , 'LTP Price: '+a.data[i].lastPrice);

//     }
// }

// This function is used for loading JSON data when loading the web page.
// $(document).ready(function () {
// const table = document.querySelector(".table");
// });

// $.get("/data").done(function (data) {
//     console.log(data);
//     for (let i = 0; i < data.NMD.length; i++) {
//         $("#mainTable").append('<tr><td>' + data.NMD[i].Plant + '</td><td>' + data.NMD[i].mdesc + '</td><td>' + data.NMD[i].Equipment + '</td><td>' + data.NMD[i].PartNo + '</td><td>' + data.NMD[i].SAPCode + '</td><td>' + data.NMD[i].Spares + '</td><td><a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a></td></tr>');
//     }
// });



// Function for updating JSON file
// function myFunction() {
//     // read the data from input filed and make a json array
//     const NMD = {
//         "Plant": $("#Name").val(),
//         "mdesc": $("#Surname").val(),
//         "Equipment": $("#Phone").val(),
//         "PartNo": $("#Email").val(),
//         "SAPCode": $("#Email").val(),
//         "Spares": $("#Email").val()
//     };
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(NMD, null, 2)
//     };
//     console.log(options);
//     fetch('/api', options);
// }