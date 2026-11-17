const nim3= "054648886";
const duaDigitAkhir= parseInt(nim3.slice(-2));
const batas= duaDigitAkhir + 10;

console.log("\n==== Bilangan Prima ====");

function cekPrima(n: number): boolean{
    if (n<2) return false;
    for (let i=2; i<=Math.sqrt(n); i++){
        if (n % i === 0) return false;
    }
    return true;
}

let prima: number[] = [];
for (let i=1; i<=batas; i++){
    if (cekPrima(i)) prima.push(i);
}

console.log(prima.join(", "));