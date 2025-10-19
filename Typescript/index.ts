// tipe data 

let nama: string = "Bagas alfiandi dewantara ";
let umur: number = 16;
let isMarried: boolean = false;

// array
let angka: number[] = [1, 2, 3, 4, 5];
let namaKota: string[] = ["kediri", "Malang ", "Bali ", "Jakarta"];

// tuple
let biodata: [string, number, boolean] = ["Bagas Alfiandi Dewanatara", 16, true];

// enum
enum Warna {
    Merah,
    Hijau,
    Biru
}
let warnaFavorit: Warna = Warna.Hijau;

// any
let data: any = "Anythin aboout me";
data = 42;
data = true;

// void
function sapa(): void {
    console.log("Halo!");
}

// null dan undefined
let nilaiKosong: null = null;
let nilaiTidakTerdefinisi: undefined = undefined;

// object
let mobil: { merk: string; tahun: number } = {
    merk: "Telkom",
    tahun: 2020
};

// union type
let nilai: string | number;
nilai = "Lulus";
nilai = 85;

// type alias
type Siswa = {
    nama: string;
    umur: number;
    kelas: string;
};

let siswa1: Siswa = {
    nama: "Bagas Alfiandi Dewanatara",
    umur: 16,
    kelas: "X RPL 2"
};

//  belajar  tentang variabble , tipe data , function , array , object , enum , tuple , union type , type alias  di typescript

/**
 * ini adalah contoh typescript yang saya pelajari hanya 10 menit 
 * 
 * semoga bermanfaat
 */