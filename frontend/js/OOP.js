

console.log("===== 1. Object Literal (OOP Paling Dasar) =====");
/**
 * @kegunaan: Cara paling dasar membuat objek tunggal di JavaScript.
 * @fungsi: Mendefinisikan objek 'siswaLiteral' secara langsung (literal) 
 * dengan properti (nama, umur) dan method (belajar).
 */
const siswaLiteral = {
    nama: "Jean",
    umur: 16,
    belajar: function () {
        // 'this.nama' mengacu pada properti 'nama' dari objek 'siswaLiteral' ini.
        console.log(`${this.nama} sedang belajar (dari Object Literal)`);
    },
};
// Memanggil method 'belajar' dari objek 'siswaLiteral'
siswaLiteral.belajar();


console.log("\n===== 2. Function Constructor (Cara Lama/Pra-ES6) =====");
/**
 * @kegunaan: Sebuah "cetakan" (blueprint) untuk membuat banyak objek 
 * dengan struktur yang sama. Ini adalah cara membuat 'class' 
 * sebelum keyword 'class' ada di JavaScript (sebelum ES6).
 * @fungsi: 
 * - Fungsi 'SiswaConstructor' bertindak sebagai constructor.
 * - Keyword 'this' digunakan untuk menetapkan properti (nama, umur) dan
 * method (belajar) ke instance baru yang akan dibuat.
 */
function SiswaConstructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
    this.belajar = function () {
        console.log(`${this.nama} belajar (dari Function Constructor)`);
    };
}
// Keyword 'new' digunakan untuk membuat objek baru (instance) dari cetakan ini.
const jeanConstructor = new SiswaConstructor("Jean", 16);
jeanConstructor.belajar(); // Output: Jean belajar (dari Function Constructor)


console.log("\n===== 3. Class (Modern ES6+ Syntax) =====");
/**
 * @kegunaan: Cara modern (ES6+) untuk membuat cetakan objek. Lebih rapi, 
 * terstruktur, dan mirip dengan bahasa OOP lain (seperti Java/Python).
 * @fungsi:
 * - 'class Siswa': Mendefinisikan cetakan bernama Siswa.
 * - 'constructor': Method khusus yang otomatis dipanggil saat objek baru dibuat
 * (menggunakan 'new'). Berguna untuk inisialisasi properti.
 * - 'belajar()' & 'absen()': Ini disebut 'method', yaitu fungsi yang 
 * dimiliki oleh class.
 */
class Siswa {
    // Constructor: dijalankan saat 'new Siswa(...)' dipanggil
    constructor(nama, umur) {
        // 'this' mengacu pada instance objek yang sedang dibuat
        this.nama = nama; // 'nama' adalah properti
        this.umur = umur; // 'umur' adalah properti
    }

    // Method 'belajar'
    belajar() {
        console.log(`${this.nama} sedang belajar (dari Class ES6)`);
    }

    // Method 'absen'
    absen() {
        console.log(`${this.nama} absen hari ini`);
    }
}
// Membuat instance baru dari class Siswa
const jeanClass = new Siswa("Jean", 16);
jeanClass.belajar(); // Memanggil method dari instance 'jeanClass'

const siswa1 = new Siswa("Budi", 17);
siswa1.absen(); // Memanggil method dari instance 'siswa1'


console.log("\n===== 4. Inheritance (Pewarisan) =====");
/**
 * @kegunaan: Membuat class baru ('child class') yang mewarisi properti dan
 * method dari class yang sudah ada ('parent class').
 * Ini berguna untuk prinsip "Don't Repeat Yourself" (DRY).
 * @fungsi:
 * - 'class User': Bertindak sebagai parent class (kelas induk).
 * - 'class Admin extends User': 'Admin' adalah child class (kelas anak)
 * yang mewarisi dari 'User'. Keyword 'extends' adalah kuncinya.
 */
class User {
    constructor(username) {
        this.username = username;
    }

    // Method ini akan diwarisi oleh Admin
    login() {
        console.log(`${this.username} login`);
    }
}

// 'Admin' mewarisi semua yang dimiliki 'User'
class Admin extends User {
    // 'Admin' juga punya method khusus 'deleteUser'
    deleteUser(user) {
        console.log(`${this.username} menghapus ${user}`);
    }
}

// Membuat instance dari child class 'Admin'
const admin = new Admin("JeanAdmin");
admin.login(); // Method 'login()' diwarisi dari 'User'
admin.deleteUser("Budi"); // Method 'deleteUser()' milik 'Admin' sendiri


console.log("\n===== 5. Polymorphism (Override Method) =====");
/**
 * @kegunaan: "Banyak bentuk". Memungkinkan child class untuk menyediakan 
 * implementasi (isi fungsi) yang berbeda untuk method yang 
 * sudah ada di parent class.
 * @fungsi:
 * - 'UserPolymorph' punya method 'sayHello()'.
 * - 'AdminPolymorph' (child class) juga mendefinisikan method 'sayHello()'.
 * - Ini disebut 'overriding' (menimpa). Saat 'adminPoly.sayHello()' dipanggil,
 * versi 'AdminPolymorph' yang akan digunakan, bukan versi 'UserPolymorph'.
 */
class UserPolymorph {
    sayHello() {
        console.log("Halo dari User");
    }
}

class AdminPolymorph extends UserPolymorph {
    // Method 'sayHello' di-override (ditimpa) dengan fungsionalitas baru
    sayHello() {
        console.log("Halo dari Admin");
    }
}

const userPoly = new UserPolymorph();
const adminPoly = new AdminPolymorph();

userPoly.sayHello(); // Output: Halo dari User
adminPoly.sayHello(); // Output: Halo dari Admin


console.log("\n===== 6. Encapsulation (Private Properties & Method) =====");
/**
 * @kegunaan: Menyembunyikan data internal (properti) atau method agar tidak
 * bisa diakses atau diubah langsung dari luar class. 
 * Ini untuk keamanan dan integritas data.
 * @fungsi:
 * - Tanda '#' (hash) di depan '#saldo' dan '#cekSaldo' menjadikannya 'private'.
 * - '#saldo' tidak bisa diakses dari luar (misal: akun.#saldo akan error).
 * - Properti/method private HANYA bisa diakses oleh method lain 
 * di dalam class 'BankAccount' itu sendiri (lewat 'tambahSaldo' dan '#cekSaldo').
 */
class BankAccount {
    // Properti private, tidak bisa diakses dari luar
    #saldo = 0;

    constructor(nama) {
        this.nama = nama;
    }

    /**
     * Method public untuk menambah saldo.
     * Ini adalah "interface" yang aman untuk mengubah data private '#saldo'.
     */
    tambahSaldo(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            // Memanggil method private dari dalam class
            console.log(`Saldo ${this.nama} sekarang: ${this.#cekSaldo()}`);
        } else {
            console.log("Jumlah tidak valid");
        }
    }

    // Method private, hanya bisa dipanggil dari dalam class ini
    #cekSaldo() {
        return this.#saldo;
    }
}

const akun = new BankAccount("Jean");
akun.tambahSaldo(1000); // Output: Saldo Jean sekarang: 1000

// Baris di bawah ini akan error jika dijalankan (dihapus komentarnya):
// console.log(akun.#saldo); // Error: Private field '#saldo' must be declared in an enclosing class
// akun.#cekSaldo(); // Error: Private field '#cekSaldo' must be declared in an enclosing class


console.log("\n===== 7. Studi Kasus Mini: Website User System =====");
/**
 * @kegunaan: Contoh class yang digunakan untuk memformat data
 * menjadi string HTML untuk ditampilkan di website.
 * @fungsi:
 * - 'class UserWeb' menyimpan data user (nama, email).
 * - 'tampilkanProfile()': Method yang mengembalikan string template literal
 * berisi HTML yang sudah diisi dengan data user (this.nama, this.email).
 */
class UserWeb {
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
    }

    // Method untuk memformat data user menjadi HTML
    tampilkanProfile() {
        return `
      <h2>${this.nama}</h2>
      <p>${this.email}</p>
    `;
    }
}

// Membuat instance user baru
const userWeb = new UserWeb("Jean", "jean@example.com");
// Memanggil method untuk mendapatkan string HTML
const profileHTML = userWeb.tampilkanProfile();

console.log("Output HTML yang di-generate:");
console.log(profileHTML);

/*
 * Kode di bawah ini adalah untuk dijalankan di BROWSER.
 * Kode ini akan mengambil string HTML dari 'profileHTML' dan 
 * menampilkannya di halaman web.
 * (Akan error jika dijalankan di lingkungan Node.js)
 */
// document.body.innerHTML = profileHTML;

console.log("\n===== Semua Contoh Selesai =====");