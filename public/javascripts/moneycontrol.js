
// API for getting historic data 
// https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history?symbol=HDFCBANK&resolution=1D&from=1649980800&to=1689724800&countback=329
// Link for fetching current market data 
// https://api.moneycontrol.com/mcapi/v1/stock/get-stock-price?scIdList=HDF01%2CICI02%2CKMF%2CUTI10%2CIIB&scId=HDF01
// Analyst Rating 
//https://api.moneycontrol.com/mcapi/v1/stock/estimates/analyst-rating?deviceType=W&scId=HDF01&ex=N

function getStockBrokerDetail(page){
    var apiLink = "https://api.moneycontrol.com/mcapi/";
    var scid = "ICI02";
	// var brokerresearch = $("#id_bokerresearch").html();
	var brokerresearch = $("#id_bokerresearch").html();
	if(brokerresearch==''){		
		$.ajax({
			type: "GET",
			url: apiLink + 'v1/stock/broker-research',
			data: { scId : scid, page : page },
			dataType: "json",
			beforeSend: function(){
			},
			success: function(result) {
                console.log(result);
				if(result.success == 1){
					var brokrArr = result.data.broker_research_data;
					var brokrhtml = '';
					if(brokrArr.length > 0){
						brokrArr.forEach(element => {
							var br_btncls = '';
							if(element.recommend_flag == 'HOLD' || element.recommend_flag == 'NEUTRAL'){
								br_btncls = 'hold';
							}else if(element.recommend_flag == 'SELL' || element.recommend_flag == 'REDUCE'){
								br_btncls = 'sell';
							}
							brokrhtml += '<div class="brrs_bx grey_bx"><div class="br_date">'+element.recommend_date+'</div><div class="clearfix"><div class="brstk_name">'+element.organization+'</div><div class="download_report"><a href="'+element.attachment+'" target="_blank" title="'+element.organization+'"><svg xmlns="http://www.w3.org/2000/svg" width="19.02" height="24.514" viewBox="0 0 19.02 24.514"><g id="pdf" transform="translate(-8 -1)"><path id="Path_1497" data-name="Path 1497"d="M25.979,48.03H9.041A1.042,1.042,0,0,1,8,46.989V40H27.02v6.989A1.042,1.042,0,0,1,25.979,48.03ZM8.845,40.845v6.144a.2.2,0,0,0,.2.2H25.979a.2.2,0,0,0,.2-.2V40.845Z" transform="translate(0 -22.516)"></path><path id="Path_1498" data-name="Path 1498" d="M25.979,25.514H9.041A1.025,1.025,0,0,1,8,24.669V2.237A1.1,1.1,0,0,1,9.041,1H21.307a.8.8,0,0,1,.561.232L26.787,6.15a.976.976,0,0,1,.232.757V24.669A1.025,1.025,0,0,1,25.979,25.514ZM8.845,24.586a.312.312,0,0,0,.2.082H25.979a.312.312,0,0,0,.2-.082V6.908a1.237,1.237,0,0,0-.01-.184L21.286,1.845H9.041c-.182,0-.2.3-.2.391Z" transform="translate(0 0)"></path><path id="Path_1499" data-name="Path 1499" d="M43.907,7.423H39V2.517a.64.64,0,0,1,1.092-.452l4.267,4.267a.64.64,0,0,1-.452,1.092Zm-4.061-.845H43.41L39.845,3.013Z" transform="translate(-17.898 -0.506)"></path><g id="Group_2443" data-name="Group 2443" transform="translate(12.33 19.565)"><path id="Path_1500" data-name="Path 1500" d="M18.938,49.183h-.694V44.924h1.225a1.719,1.719,0,0,1,.537.087,1.461,1.461,0,0,1,.477.26,1.368,1.368,0,0,1,.341.419,1.163,1.163,0,0,1,.13.552,1.51,1.51,0,0,1-.11.587,1.234,1.234,0,0,1-.306.442,1.381,1.381,0,0,1-.474.277,1.825,1.825,0,0,1-.612.1h-.514Zm0-3.733v1.687h.636a.761.761,0,0,0,.251-.043.639.639,0,0,0,.228-.142.7.7,0,0,0,.168-.275,1.3,1.3,0,0,0,.063-.436,1.183,1.183,0,0,0-.029-.24.681.681,0,0,0-.37-.468.934.934,0,0,0-.428-.084Z" transform="translate(-18.244 -44.924)"></path><path id="Path_1501" data-name="Path 1501" d="M30.022,46.935a3.129,3.129,0,0,1-.113.9,2.225,2.225,0,0,1-.286.624,1.464,1.464,0,0,1-.39.4,1.944,1.944,0,0,1-.419.216,1.706,1.706,0,0,1-.37.093,2.284,2.284,0,0,1-.249.02H26.584V44.924h1.283a2.437,2.437,0,0,1,.945.17,1.963,1.963,0,0,1,.676.454,1.863,1.863,0,0,1,.4.645A2.129,2.129,0,0,1,30.022,46.935Zm-2.057,1.739a1.149,1.149,0,0,0,1.017-.451,2.286,2.286,0,0,0,.312-1.306,2.212,2.212,0,0,0-.063-.526,1.124,1.124,0,0,0-.246-.471,1.3,1.3,0,0,0-.494-.341,2.13,2.13,0,0,0-.809-.13h-.4v3.224Z" transform="translate(-23.059 -44.924)"></path><path id="Path_1502" data-name="Path 1502" d="M37.8,45.45V46.79h1.78v.474H37.8v1.918h-.7V44.924h2.664v.526Z" transform="translate(-29.129 -44.924)"></path></g><path id="Path_1503" data-name="Path 1503" d="M20.8,20.072h0a.679.679,0,0,1-.409-.138,1.014,1.014,0,0,1-.471-.948c.077-.688.928-1.408,2.53-2.142a28.372,28.372,0,0,0,1.6-4.544,4.177,4.177,0,0,1-.533-2.808A.813.813,0,0,1,24,8.979a2.075,2.075,0,0,1,.429-.073c.213,0,.4.274.533.443s.407.5-.158,2.875a13.5,13.5,0,0,0,2.15,3.2,8.217,8.217,0,0,1,1.419-.151c.662,0,1.063.154,1.226.472a.855.855,0,0,1-.165.913,1.123,1.123,0,0,1-.938.5,2.812,2.812,0,0,1-1.78-.966,20.252,20.252,0,0,0-3.731,1.193,11.992,11.992,0,0,1-1.007,1.8C21.547,19.789,21.174,20.072,20.8,20.072Zm1.125-2.166c-.9.507-1.272.924-1.3,1.159,0,.039-.016.141.182.292C20.876,19.338,21.244,19.17,21.929,17.906Zm5.764-1.878c.344.265.429.4.654.4a.637.637,0,0,0,.511-.186.656.656,0,0,0,.1-.175c-.052-.028-.121-.083-.5-.083A6.01,6.01,0,0,0,27.693,16.028Zm-3.157-2.782a30.321,30.321,0,0,1-1.13,3.2,21.033,21.033,0,0,1,2.746-.854A14.468,14.468,0,0,1,24.536,13.246Zm-.257-3.577a1.014,1.014,0,0,0,.041,1.359C24.721,10.135,24.3,9.663,24.279,9.669Z" transform="translate(-6.881 -4.564)"></path></g></svg></a></div></div><button class="button_buy '+br_btncls+'">'+element.recommend_flag+'</button><table cellpadding="0" cellspacing="0" width="100%"><tr><td>Reco Price <strong>'+element.recommended_price+'</strong></td><td width="70">Target Price <strong>'+element.target+'</strong></td></tr></table></div>';
						});
						brokrhtml += '<div id="loader_broker_'+page+'"></div>';
						brokrhtml += '<script> var broker_page = 3; $("#scroll_broker").on("scroll", function() { if($(this).scrollTop() + $(this).innerHeight() >= ($(this)[0].scrollHeight-1)) { appendBrokerReaserchData(broker_page); broker_page = broker_page + 1; }});</script>';
						
						$("#id_bokerresearch").html(brokrhtml);
					}
				}
			},error: function (jqXHR, exception) {
                console.log(exception);
				var msg = '';
				if (jqXHR.status === 0) {
					msg = 'Not connect.\n Verify Network.';
				} else if (jqXHR.status == 404) {
					msg = 'Requested page not found. [404]';
				}else if (jqXHR.status == 204) {
					msg = 'No data found';
				} else if (jqXHR.status == 500) {
					msg = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					msg = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					msg = 'Time out error.';
				} else if (exception === 'abort') {
					msg = 'Ajax request aborted.';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				$("#id_bokerresearch").html(msg);
				// $("#broker_repop").modal("show");
			},
		});
	}else{
		// $("#broker_repop").modal("show");
	}
}

$(document).ready(function () {

    $.ajax({
        type: "GET",
        // url: "https://api.moneycontrol.com/mcapi/v1/stock/price-volume",
        url: "https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history?symbol=HDFCBANK&resolution=1D&from=1649980800&to=1689724800&countback=329",
        data: { scId: "" },
        dataType: "json",
        beforeSend: function () {
        },
        success: function (result) {
            //   let volume_json = JSON.stringify(result,null,2);
              let volume_json = result;
            // let volume_json = result;
            console.log(volume_json);
            // document.getElementById("demo").innerHTML = volume_json;
        }, error: function (jqXHR, exception) {
            console.log(error);
        },
    });

    getStockBrokerDetail(12);
});


