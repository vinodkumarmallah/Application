function GetData() {
    var scid = ["HDFCBANK","RELIANCE","SBIN","INFY"];
    var objData = {
        "company": [
            {
                "Name":"HDFCBANK",
                "data":""

            },
            {
                "Name":"Reliance",
                "data":""

            }
        ]
    };
    var objArray = [];
    for (let i = 0; i < scid.length; i++) {
        console.log(scid[i]);
        var link = "https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history?symbol="+scid[i]+"&resolution=1D&from=1649980800&to=1689724800&countback=800";
        $.get(link, function (data, statusTxt, xhr) {
            if (statusTxt == "success") {
                // if(objData['company'][i].Name = scid[i]){
                    // console.log(objData['company'][i].Name);
                    objArray.push([scid[i], data]);
                // }                               
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    body: JSON.stringify(objArray)
                };

                fetch('/data', options);
            }
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    }
   
    console.log({objArray});
}

function reliance(){
    $.get("/HDFCBANK").done(function (data) {
        console.log(JSON.parse(data));
    });
}
