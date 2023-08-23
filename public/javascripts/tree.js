var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

$("body").on("click", function (event) {
  var href = $(event.target).attr('href');
  var element = document.getElementById("pdf")
  console.log(href);
  if (href == "#chain1") {
    element.setAttribute("data", "pdf/print.pdf");
  } else if (href == "#chain2") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#chain3") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#scaut1") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#scaut2") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#scaut3") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#K01") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#K03") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#K05") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#PSA") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#SM1") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#SM2") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#FSC") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#PLC1") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#PLC2") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#PK03") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#PK04") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#ESD") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#EXTRUDER") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#CONVEYING") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  } else if (href == "#FUNKEN") {
    element.setAttribute("data", "pdf/Payment1.pdf");
  }



});

