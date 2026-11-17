const nim2= "054648886";
const duaDigitTerakhir = parseInt(nim2.slice(-2));
const digitKe3DariBelakang = parseInt(nim2[nim2.length - 3]);
const beda = digitKe3DariBelakang + 1;

console.log("\n==== Deret Aritmatika ====");
let deret = [];
for (let i=0; i<10; i++){
    deret.push(duaDigitTerakhir + i * beda);
}
console.log(deret.join(", "));