const readLine = require("readline-sync");

const angkaPertama = parseFloat(readLine.question("Masukkan Angka Pertama :"));
const operator = readLine.question("Masukkan Operator (+, -, *, /, %) :");
const angkaKedua = parseFloat(readLine.question("Masukkan Angka Kedua :"));

if(isNaN(angkaPertama) || isNaN(angkaKedua)) {
    return console.log("Input tidak sesuai !!!");
}
else {
const hasil = execute(angkaPertama, angkaKedua, operator);

console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angkaPertama, angkaKedua, operator){
    switch (operator) {
        case "+" :
            return angkaPertama + angkaKedua;
        case "-" :
            return angkaPertama - angkaKedua;
        case "*" :
            return angkaPertama * angkaKedua;
        case "/" :
            // validasi angka
            if (angkaKedua === 0) {
                return console.log("Error : tidak bisa dibagi dengan nol");
            }
            return angkaPertama / angkaKedua;
        case "%" :
            return angkaPertama % angkaKedua;
        default :
        console.log("operator tidak valid");
    }
}