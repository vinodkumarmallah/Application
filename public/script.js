const html5QrCode = new Html5Qrcode("reader");

html5QrCode.start(
  { facingMode: "environment" }, // use back camera
  { fps: 10, qrbox: 250 },
  (decodedText, decodedResult) => {
    document.getElementById("result").innerText = decodedText;
  },
  (errorMessage) => {
    console.warn("QR error:", errorMessage);
  }
);
