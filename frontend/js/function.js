// fungsi biasa

function sapa() {
    console.log("Halo, selamat datang!");
}

// fungsi dengan parameter

function sapaOrang(nama) {
    console.log("Halo, " + nama + "!");
}

// fungsi dengan nilai kembali

function tambah(a, b) {
    return a + b;
}

// arrow function

const kali = (a, b) => a * b;

// anonim function

const greeting = function(nama) {
    console.log("Hai, " + nama + "!");
}

// contoh penggunaan fungsi

sapa();
sapaOrang("Alfiandi");
console.log("Hasil penjumlahan: " + tambah(5, 3));
console.log("Hasil perkalian: " + kali(4, 2));
greeting("Dunia");