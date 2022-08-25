const QRCode = require('qrcode');

let data = {
    id: 1001,
    name: "Rahul",
    email: "rahul@123",
    designation: "Software Engineer",
    "Mobile": 5645789765
}

let stringdata = JSON.stringify(data);

QRCode.toString(stringdata, {type: 'terminal'}, (err, QRCode) => {
    if(err) return console.log("error occured");

    console.log(QRCode);
});

QRCode.toDataURL(stringdata, (err, code) =>{
    if(err) return console.log("error occured");

    console.log(code);
});