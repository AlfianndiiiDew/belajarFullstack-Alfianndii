# Roadmap Belajar dari Nol: JavaScript -> Node.js -> Express.js -> MySQL/PostgreSQL

Dokumen ini dirancang buat belajar **step-by-step dari nol** sampai bisa bikin backend API yang siap dipakai frontend.

## Cara Pakai Roadmap Ini
- Belajar **1 materi per hari** (60-120 menit).
- Setiap materi punya:
  - **Tujuan**
  - **Materi inti**
  - **Challenge**
- Simpan semua latihan di repo ini biar jadi portofolio progres belajar.

---

## Phase 1 - Fondasi JavaScript (Week 1-2)

### Materi 1 - Variabel, Tipe Data, Operator
**Tujuan:** paham dasar sintaks JavaScript.

**Materi inti:**
- `let`, `const`
- Number, String, Boolean, Null, Undefined
- Operator aritmatika dan perbandingan

**Challenge:**
1. Buat file `latihan-js-01.js`.
2. Simpan data profil kamu (nama, umur, status aktif).
3. Tampilkan kalimat: `Halo, nama saya ... umur ... tahun`.
4. Buat perhitungan sederhana (misalnya luas persegi panjang).

---

### Materi 2 - Conditional (`if/else`, `switch`)
**Tujuan:** bisa membuat keputusan berdasarkan kondisi.

**Materi inti:**
- `if`, `else if`, `else`
- `switch case`
- Operator logika `&&`, `||`, `!`

**Challenge:**
1. Buat program penilaian:
   - 90-100: A
   - 80-89: B
   - 70-79: C
   - <70: D
2. Buat versi kedua pakai `switch` untuk cek hari (`Senin` - `Minggu`).

---

### Materi 3 - Looping (`for`, `while`)
**Tujuan:** bisa mengulang proses otomatis.

**Materi inti:**
- `for`
- `while`
- `break`, `continue`

**Challenge:**
1. Cetak angka 1-50.
2. Cetak hanya angka genap dari 1-30.
3. Buat tabel perkalian angka 7.

---

### Materi 4 - Function
**Tujuan:** bisa bikin kode reusable.

**Materi inti:**
- Function declaration
- Arrow function
- Parameter dan return value

**Challenge:**
1. Buat function `hitungDiskon(harga, persen)`.
2. Buat function `hitungBMI(berat, tinggi)` lalu tampilkan kategori BMI.
3. Buat minimal 3 test case pemanggilan function.

---

### Materi 5 - Array & Object
**Tujuan:** bisa mengelola kumpulan data.

**Materi inti:**
- Array method: `push`, `map`, `filter`, `find`
- Object dan nested object

**Challenge:**
1. Buat array berisi 5 produk (`nama`, `harga`, `stok`).
2. Tampilkan produk dengan stok > 0.
3. Cari produk paling mahal.

---

### Materi 6 - Async JavaScript Dasar
**Tujuan:** paham asynchronous flow sebelum masuk backend.

**Materi inti:**
- Callback
- Promise
- `async/await`
- `try/catch`

**Challenge:**
1. Buat simulasi API pakai `setTimeout`.
2. Buat function `getUser()` yang return Promise.
3. Panggil dengan `async/await` + tangani error.

---

## Phase 2 - Node.js Dasar (Week 3)

### Materi 7 - Pengenalan Node.js
**Tujuan:** paham cara menjalankan JavaScript di server.

**Materi inti:**
- Runtime Node.js
- `npm init -y`
- `package.json`
- Menjalankan file dengan `node file.js`

**Challenge:**
1. Buat folder `backend-basic`.
2. Inisialisasi project Node.js.
3. Buat script `start` di `package.json`.

---

### Materi 8 - Core Module Node.js
**Tujuan:** bisa pakai modul bawaan Node.

**Materi inti:**
- `fs`
- `path`
- `http` (dasar)

**Challenge:**
1. Buat file `notes.txt` otomatis pakai `fs.writeFileSync`.
2. Baca isi file pakai `fs.readFileSync`.
3. Buat HTTP server sederhana tanpa Express (return teks biasa).

---

### Materi 9 - Mini Project Node CLI
**Tujuan:** melatih logika backend tanpa framework.

**Materi inti:**
- Argument command line (`process.argv`)
- Baca/tulis file JSON

**Challenge:**
Buat aplikasi CLI todo:
- `node app.js add "Belajar Express"`
- `node app.js list`
- `node app.js delete 1`

Data disimpan di `todos.json`.

---

## Phase 3 - Express.js (Week 4-5)

### Materi 10 - Setup Express & Routing
**Tujuan:** bisa membuat REST API dasar.

**Materi inti:**
- Instal express
- Routing: `GET`, `POST`, `PUT`, `DELETE`
- `req.params`, `req.query`, `req.body`

**Challenge:**
1. Buat project `express-api`.
2. Endpoint:
   - `GET /` -> "API jalan"
   - `GET /todos`
   - `POST /todos`
3. Simpan data sementara di array.

---

### Materi 11 - Middleware & Error Handling
**Tujuan:** paham alur request di Express.

**Materi inti:**
- `express.json()`
- Custom middleware
- Global error handler

**Challenge:**
1. Tambahkan middleware logger (`method + url + waktu`).
2. Validasi body saat create todo.
3. Jika body tidak valid, return status `400`.

---

### Materi 12 - Struktur Project Express yang Rapi
**Tujuan:** siap bikin backend yang maintainable.

**Materi inti:**
- Struktur folder:
  - `routes/`
  - `controllers/`
  - `services/`
  - `middlewares/`
- Pisah tanggung jawab file

**Challenge:**
Refactor API todo ke struktur folder di atas tanpa mengubah behavior endpoint.

---

## Phase 4 - Database SQL (Week 6)

> Pilih salah satu dulu (disarankan **PostgreSQL**). Setelah paham, ulangi dengan MySQL biar fleksibel.

### Materi 13 - SQL Dasar (MySQL/PostgreSQL)
**Tujuan:** paham operasi database inti.

**Materi inti:**
- DDL: `CREATE TABLE`
- DML: `INSERT`, `SELECT`, `UPDATE`, `DELETE`
- Filter: `WHERE`, `ORDER BY`, `LIMIT`

**Challenge:**
1. Buat database `belajar_backend`.
2. Buat tabel `users` dan `todos`.
3. Isi minimal 5 data dummy.
4. Tulis 10 query latihan (gabungan SELECT/UPDATE/DELETE).

---

### Materi 14 - Integrasi Express + Database
**Tujuan:** API tidak lagi pakai array, tapi pakai DB asli.

**Materi inti:**
- Driver:
  - PostgreSQL: `pg`
  - MySQL: `mysql2`
- Connection pool
- Query parameterized (anti SQL injection)

**Challenge:**
Migrasikan endpoint todo:
- `GET /todos`
- `GET /todos/:id`
- `POST /todos`
- `PUT /todos/:id`
- `DELETE /todos/:id`

Semua endpoint wajib ambil/simpan data dari DB.

---

### Materi 15 - Relasi & Join
**Tujuan:** paham desain data real-world.

**Materi inti:**
- Relasi one-to-many
- Foreign key
- `JOIN`

**Challenge:**
1. Relasikan `users` dengan `todos` (`user_id`).
2. Endpoint `GET /users/:id/todos`.
3. Endpoint `GET /todos` menampilkan nama user pemilik todo.

---

## Phase 5 - Final Project (Week 7-8)

### Materi 16 - Build Project: Task Management API
**Tujuan:** menggabungkan semua materi jadi project portofolio.

**Spesifikasi minimal:**
- Auth: register + login (JWT)
- CRUD todo
- Filter todo by status
- Pagination sederhana
- Validasi input
- Error handling rapi

**Challenge Akhir:**
1. Buat dokumentasi endpoint di README.
2. Export Postman collection.
3. Deploy ke Railway/Render.
4. Buat video demo 3-5 menit.

---

## Checklist Kompetensi (Lulus Roadmap)
- [ ] Bisa jelaskan alur request-response di backend.
- [ ] Bisa bikin REST API CRUD dengan Express.
- [ ] Bisa konek dan query MySQL/PostgreSQL.
- [ ] Bisa desain tabel relasional sederhana.
- [ ] Bisa handle error & validasi input.
- [ ] Bisa deploy API dan mendokumentasikan endpoint.

---

## Saran Pola Belajar Mingguan
- Senin-Kamis: materi + challenge kecil.
- Jumat: review ulang + rapikan catatan.
- Sabtu: mini project.
- Minggu: istirahat / catch-up materi tertinggal.

Kalau konsisten 1-2 jam/hari, roadmap ini realistis buat dikuasai dalam 8 minggu.
