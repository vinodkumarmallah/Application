function onScanSuccess(decodedText, decodedResult) {
    document.getElementById("result").innerText = decodedText;
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    console.warn(`Scan error = ${error}`);
}

let html5QrCodeScanner = new Html5QrcodeScanner(
    "reader", 
    { fps: 10, qrbox: 250 }
);

html5QrCodeScanner.render(onScanSuccess, onScanFailure);
