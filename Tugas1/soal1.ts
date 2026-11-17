const nim1 = "054648886";
const tinggi = parseInt(nim1[nim1.length - 1]);

console.log("==== Pola Segitiga ====");
for(let i=1; i<=tinggi; i++){
    let baris = "";
    for(let j=1; j<=i; j++){
        baris += j+ " ";
    }
    console.log(baris.trim());
}