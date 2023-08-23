
$(".container").on("mousemove", function (event) {
    var pageCoords = event.pageX + ", " + event.pageY;
    var dx = document.getElementById('dragX');
    dx.style.position = "absolute";
    dx.style.left = event.pageX + 'px';
    var dy = document.getElementById('dragY');
    dy.style.position = "absolute";
    dy.style.top = event.pageY + 'px';

    var t = document.getElementById('dragThisY');
    t.style.position = "absolute";
    t.style.top = (event.pageY - 21) + 'px';

    var t = document.getElementById('dragThisX');
    t.style.position = "absolute";
    if (event.pageX < 35) {
        t.style.left = 10 + 'px';
    } else if (event.pageX > 1113) {
        t.style.left = 1085 + 'px';
    } else if (event.pageX > 35) {
        t.style.left = (event.pageX - 30) + 'px';
    }

    var price = $("#maxPrice").text();
    $('#XposX').text('Date :' + Math.abs(event.pageX - 1150));
    $('#posX').text('Date :' + Math.abs(event.pageX));
    $('#YposY').text('Price : ' + Math.round((price - 5.4 - (parseInt(-9) + (Math.abs(event.pageY) * 0.4))) * 100) / 100);
    $('#posY').text('Price : ' + Math.round((price - 5.4 - (parseInt(-9) + (Math.abs(event.pageY) * 0.4))) * 100) / 100);
    // $('#YposY').text('Price : ' + Math.abs(event.pageY-500));
    $(".containerY").css("opacity", "1");
    $("#dragY").css("opacity", "1");
});


//Make cursor visible on mouseover
$(".container").on("mouseover", function () {
    $(".containerX").css("opacity", "1");
    $(".containerY").css("opacity", "1");
    $("#dragX").css("opacity", "1");
    $("#dragY").css("opacity", "1");

});

//Make cursor invisible on mouseover
$(".container").on("mouseout", function () {
    $(".containerX").css("opacity", "0");
    $(".containerY").css("opacity", "0");
    $("#dragX").css("opacity", "0");
    $("#dragY").css("opacity", "0");

});

var minPrice = parseInt(document.getElementById('minPrice').innerText);
var maxPrice = parseInt(document.getElementById('maxPrice').innerText);
if ((maxPrice - minPrice) >= 200) {
    var lineno = 0;
}
// var height = document.getElementsByClassName('container');
var height = Math.round((document.getElementsByClassName('container')[0].clientHeight) / 10);
var value = maxPrice;
for (let i = 1; i <= ((maxPrice - minPrice) / 20) - 2; i++) {
    lineno += height;
    value -= 20;
    $(".linehl").append('<div class="hl" style="position:absolute; top:' + (lineno-10.6) + 'px;"></div>');
    $(".parentDotr").append('<div class="dotr" style="position:absolute; top:' + (lineno + 10.6) + 'px;"></div>');
    $(".maxPrice").append('<div class="maxPriceChild" style="position:absolute;top:' + (lineno + 5) + 'px;">' + Math.round(value) + '</div>');
    
}

var line_vl =0;
for (let i = 1; i <= 10; i++) {
    line_vl+=114
    $(".linevl").append('<div class="vl" style="position:absolute; left:' +line_vl+ 'px;"></div>');
    $(".parentDotb").append('<div class="dotb" style="position:absolute; left:' +line_vl + 'px;"></div>');
}


$(document).click(function(event) {
    var text = $(event.target);
    var x = event.pageX;
    // console.log(x);

});

const slider = document.querySelector('.container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e) => {
    isDown = true;
    // console.log(slider);
    startX = e.pageX - slider.offsetLeft;
    // console.log(startX);
});

slider.addEventListener('mouseleave',(e) => {
    isDown = false;
});
slider.addEventListener('mouseup',(e) => {
    isDown = false;
});
slider.addEventListener('mousemove',(e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    var walk = x - startX;

    // Scrolling of vertical line 
    $('.linevl .vl').each(function(i, obj) {
        var left = parseInt($(obj).css("left"),10);
        $(obj).css("left",left+(walk/10)+"px");
    });
    // Scrolling of vertical dot
    $('.parentDotb .dotb').each(function(i, obj) {
        var left = parseInt($(obj).css("left"),10);
        $(obj).css("left",left+(walk/10)+"px");
    });
    //Append line from left
    if( parseInt($(".linevl .vl:eq(0)").css("left"),10)>114){
        $(".linevl").prepend('<div class="vl" style="position: absolute; left:0px;"></div>')
    }
    // Append dot from left
    if( parseInt($(".parentDotb .dotb:eq(0)").css("left"),10)>114){
        $(".parentDotb").prepend('<div class="dotb" style="position: absolute; left:0px;"></div>')
    }
    //Append line from right
    if( 1140 - parseInt($(".linevl .vl:last-child").css("left"),10)>114){
        $(".linevl").append('<div class="vl" style="position:absolute; left:1140px;" ></div>')
    }
    //Append dot from right
    if( 1140 - parseInt($(".parentDotb .dotb:last-child").css("left"),10)>114){
        $(".parentDotb").append('<div class="dotb" style="position:absolute; left:1140px;" ></div>')
    }
    if( parseInt($(".linevl .vl:last-child").css("left"),10) > 1140){
        $(".linevl .vl:last-child").remove();
    }
    if( parseInt($(".parentDotb .dotb:last-child").css("left"),10) > 1140){
        $(".parentDotb .dotb:last-child").remove();
    }
});


