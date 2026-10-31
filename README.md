# IDENTITAS PRAKTIKUM

| Keterangan | Identitas |
|---|---|
| Nama | Anggun Kusuma Wardani |
| NIM | [312510045] |
| Kelas | [I253A] |
| Mata Kuliah | Pemrograman Web |
| Dosen Pengampu | [Nama Dosen] |
| Praktikum | Praktikum 6 – JavaScript DOM dan Event Handling |

---

# PRAKTIKUM 6 – JAVASCRIPT DOM DAN EVENT HANDLING

## 1. Tujuan Praktikum

Praktikum 6 ini bertujuan untuk memahami dan menerapkan konsep Document Object Model (DOM) serta Event Handling menggunakan JavaScript dalam pengembangan halaman web interaktif.

Adapun tujuan khusus dari praktikum ini adalah:

1. Memahami konsep DOM dan hubungan antara JavaScript dengan elemen HTML.
2. Mempelajari cara memilih dan memanipulasi elemen HTML menggunakan JavaScript.
3. Mengubah teks, atribut, dan tampilan elemen HTML secara dinamis.
4. Memahami penggunaan event handling seperti `click`, `input`, `change`, `submit`, dan `reset`.
5. Menerapkan validasi formulir menggunakan JavaScript.
6. Membuat elemen HTML secara dinamis menggunakan DOM.
7. Mengembangkan halaman web interaktif melalui latihan dan mini project.

## 2. Struktur File

Pada praktikum ini dibuat sebuah folder proyek bernama `Lab6Web` dengan struktur sebagai berikut:

```text
Lab6Web/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── Screenshot/
    ├── 01.png
    ├── 02.png
    ├── 03.CSS-01.png
    ├── 03.CSS-02.png
    ├── 04.png
    ├── 05.png
    ├── 06.png
    ├── 07.Mini-Project.png
    ├── 08.Eksperimen-Mandiri-01.png
    ├── 09.Eksperimen-Mandiri-02.png
    ├── 10.Eksperimen-Mandiri-03.png
    ├── 11.Eksperimen-Mandiri-04-1.png
    ├── 12.Eksperimen-Mandiri-04-2.png
    ├── 13.Eksperimen-Mandiri-05-1.png
    └── 14.Eksperimen-Mandiri-05-2.png
```

### Fungsi setiap file

- **index.html**: Berisi struktur halaman web, seperti judul, paragraf, tombol, formulir, dan daftar tugas.
- **style.css**: Mengatur tampilan halaman web, termasuk warna, ukuran teks, jarak, tombol, dan tata letak.
- **script.js**: Berisi kode JavaScript untuk memanipulasi DOM, menangani event, dan melakukan validasi.
- **README.md**: Berisi dokumentasi praktikum, tujuan, langkah kerja, hasil, evaluasi, dan kesimpulan.
- **Screenshot/**: Menyimpan dokumentasi gambar hasil pengerjaan setiap latihan dan eksperimen.

## 3. Cara Menjalankan Program

Berikut langkah-langkah untuk menjalankan program Praktikum 6:

1. Buka aplikasi Visual Studio Code.
2. Pilih menu **File → Open Folder**.
3. Pilih folder proyek `Lab6Web`.
4. Pastikan file `index.html`, `style.css`, dan `script.js` berada dalam satu folder.
5. Buka file `index.html`.
6. Pastikan file CSS dan JavaScript sudah terhubung dengan HTML menggunakan kode berikut di bagian `<head>`:

   ```html
   <link rel="stylesheet" href="style.css">
   <script src="script.js" defer></script>
   ```

7. Simpan seluruh file menggunakan `Ctrl + S`.
8. Buka file `index.html` melalui browser Microsoft Edge atau Google Chrome.
9. Lakukan pengujian terhadap setiap fitur yang telah dibuat.

Atribut `defer` digunakan agar JavaScript dijalankan setelah dokumen HTML selesai diproses oleh browser.

## 4. Langkah Kerja Praktikum

### A. Persiapan

Membuat folder proyek `Lab6Web` dan tiga file utama, yaitu `index.html`, `style.css`, dan `script.js`.

Selanjutnya, menghubungkan file CSS dan JavaScript ke dalam HTML agar setiap bagian dapat bekerja secara terintegrasi.

### B. Latihan 1 – Mengubah Teks dengan DOM

Pada latihan pertama dilakukan manipulasi teks pada elemen HTML menggunakan JavaScript.

Metode yang digunakan adalah:

- `getElementById()` untuk mengambil elemen berdasarkan ID.
- `textContent` untuk mengubah isi teks elemen.

Hasilnya, judul dan paragraf pada halaman web dapat diubah secara langsung menggunakan JavaScript.

**Screenshot:** `Screenshot/01.png`

### C. Latihan 2 – Event Click

Pada latihan kedua diterapkan event `click` untuk menjalankan suatu perintah ketika tombol ditekan.

JavaScript menggunakan `addEventListener()` untuk mendeteksi klik pada tombol. Ketika tombol ditekan, teks pada paragraf akan berubah dan menampilkan waktu saat tombol diklik.

**Screenshot:** `Screenshot/02.png`

### D. Latihan 3 – Mengubah Gaya CSS

Pada latihan ketiga dilakukan perubahan tampilan elemen HTML menggunakan JavaScript dan CSS.

Metode `classList.toggle()` digunakan untuk menambahkan atau menghapus class CSS ketika tombol diklik.

Hasilnya, paragraf dapat berubah warna, memiliki latar belakang, garis tepi, dan ukuran teks yang lebih besar.

**Screenshot:** `Screenshot/03.CSS-01.png`
`Screenshot/03.CSS-02.png`

### E. Latihan 4 – Penghitung Karakter

Pada latihan keempat dibuat fitur penghitung jumlah karakter yang dimasukkan pengguna.

Event `input` digunakan untuk mendeteksi perubahan pada kolom teks. Jumlah karakter akan diperbarui secara langsung ketika pengguna mengetik atau menghapus teks.

**Screenshot:** `Screenshot/04.png`

### F. Latihan 5 – Validasi Formulir

Pada latihan kelima dibuat formulir pendaftaran yang terdiri dari nama lengkap, email, dan usia.

Validasi dilakukan menggunakan JavaScript dengan beberapa ketentuan:

1. Nama tidak boleh kosong.
2. Email harus memiliki format yang valid.
3. Usia harus berupa bilangan bulat antara 17 sampai 100.
4. Jika seluruh data valid, sistem menampilkan pesan keberhasilan.

Event `submit` digunakan untuk menjalankan proses validasi ketika tombol daftar ditekan. Metode `preventDefault()` digunakan agar halaman tidak melakukan reload secara otomatis.

**Screenshot:**
- `Screenshot/05.png`

### G. Latihan 6 – Daftar Tugas (To-Do List)

Pada latihan keenam dibuat fitur daftar tugas sederhana yang memungkinkan pengguna menambahkan tugas dan menandai tugas yang sudah selesai.

Metode yang digunakan antara lain:

- `createElement()` untuk membuat elemen HTML baru.
- `appendChild()` untuk memasukkan elemen ke dalam daftar.
- `addEventListener()` untuk menangani klik tombol.
- `classList.toggle()` untuk mengubah status tugas.

Hasilnya, pengguna dapat menambahkan tugas dan mengubah tampilannya menjadi selesai atau belum selesai.

**Screenshot:**
- `Screenshot/06.png`

### H. Mini Project – Formulir Pendaftaran Workshop

Mini Project merupakan penggabungan materi DOM dan Event Handling dari latihan sebelumnya.

Dibuat formulir pendaftaran workshop yang memiliki beberapa fitur, yaitu:

1. Input nama lengkap peserta.
2. Input alamat email.
3. Pilihan sesi workshop berupa Pagi, Siang, dan Sore.
4. Penghitung karakter nama secara langsung.
5. Ringkasan sesi yang dipilih.
6. Validasi nama, email, dan pilihan sesi.
7. Pesan keberhasilan atau kesalahan.
8. Tombol reset untuk mengosongkan formulir.

Event yang diterapkan adalah `input`, `change`, `submit`, dan `reset`.

**Screenshot:**
- `Screenshot/07.Mini-Project.png`

### I. Eksperimen Mandiri

Eksperimen mandiri dilakukan untuk mengembangkan dan memahami lebih lanjut penggunaan DOM dan Event Handling.

**1. Menambahkan tombol hapus pada daftar tugas**

Menambahkan tombol Hapus pada setiap tugas. Metode `remove()` digunakan untuk menghapus elemen tugas yang dipilih tanpa menghapus tugas lainnya.

Screenshot: `Screenshot/08.Eksperimen-Mandiri-01.png`

**2. Mengubah validasi nama minimal 3 karakter**

Mengubah ketentuan validasi nama pada Latihan 5. Nama harus memiliki minimal 3 karakter agar dapat melewati pemeriksaan.

Screenshot: `Screenshot/09.Eksperimen-Mandiri-02.png`

**3. Menggunakan event change pada pilihan sesi workshop**

Menguji event `change` pada pilihan sesi workshop. Ketika pengguna memilih sesi yang berbeda, ringkasan sesi akan diperbarui secara langsung.

Fitur ini menggunakan kode yang sudah diterapkan pada Mini Project, sehingga tidak diperlukan penambahan fitur baru.

Screenshot: `Screenshot/10.Eksperimen-Mandiri-03.png`

**4. Menampilkan dan menyembunyikan paragraf**

Membuat tombol untuk menyembunyikan dan menampilkan kembali paragraf menggunakan `classList.toggle()` dan CSS `display: none`.

Screenshot:
- `Screenshot/11.Eksperimen-Mandiri-04-1.png`
- `Screenshot/12.Eksperimen-Mandiri-04-2.png`

**5. Memahami pengaruh posisi script dan atribut defer**

Melakukan pengujian dengan menghapus atribut `defer` dari pemanggilan file JavaScript pada bagian `<head>`. Pengujian dilakukan untuk mengetahui kemungkinan kesalahan ketika JavaScript dijalankan sebelum elemen HTML tersedia.

Setelah pengujian, atribut `defer` dikembalikan agar seluruh fitur dapat berjalan dengan normal.

Screenshot:
- `Screenshot/13.Eksperimen-Mandiri-05-1.png`
- `Screenshot/14.Eksperimen-Mandiri-05-2.png`

## 5. Jawaban Evaluasi

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya dalam pengembangan web?

DOM (Document Object Model) merupakan representasi struktur dokumen HTML dalam bentuk objek yang dapat diakses dan dimanipulasi menggunakan JavaScript.

Manfaat DOM dalam pengembangan web adalah memungkinkan pengembang mengubah isi teks, atribut, struktur, dan tampilan elemen HTML secara dinamis tanpa harus memuat ulang seluruh halaman.

### 2. Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?

Ketiganya merupakan metode JavaScript untuk memilih elemen HTML, tetapi memiliki perbedaan.

- `getElementById()` digunakan untuk mengambil satu elemen berdasarkan ID.
- `querySelector()` digunakan untuk mengambil elemen pertama yang sesuai dengan selector CSS.
- `querySelectorAll()` digunakan untuk mengambil seluruh elemen yang sesuai dengan selector CSS dalam bentuk NodeList.

Contoh:

```javascript
const judul = document.getElementById("judul");

const paragraf = document.querySelector("p");

const semuaParagraf = document.querySelectorAll("p");
```

### 3. Apa fungsi addEventListener() dan sebutkan tiga contoh event yang dapat digunakan?

`addEventListener()` merupakan metode JavaScript yang digunakan untuk memasang event listener pada suatu elemen HTML sehingga program dapat menjalankan fungsi tertentu ketika suatu kejadian terjadi.

Tiga contoh event yang dapat digunakan adalah:

1. `click`: dijalankan ketika elemen diklik.
2. `input`: dijalankan ketika nilai input berubah.
3. `change`: dijalankan ketika nilai suatu elemen berubah dan perubahan tersebut diterapkan.

Contoh penggunaan:

```javascript
tombol.addEventListener("click", function () {
    alert("Tombol berhasil diklik!");
});
```

### 4. Mengapa event preventDefault() digunakan pada formulir?

`preventDefault()` digunakan untuk mencegah perilaku bawaan browser ketika suatu event terjadi.

Pada formulir, metode ini digunakan untuk mencegah halaman melakukan reload atau mengirimkan formulir secara otomatis sebelum proses validasi JavaScript selesai.

Dengan demikian, data dapat diperiksa terlebih dahulu dan pesan kesalahan dapat ditampilkan langsung pada halaman.

### 5. Apa perbedaan textContent dan innerHTML? Mengapa textContent lebih aman untuk menampilkan input pengguna?

`textContent` digunakan untuk mengambil atau mengubah isi teks suatu elemen tanpa memproses teks tersebut sebagai HTML.

Sementara itu, `innerHTML` digunakan untuk mengambil atau mengubah isi HTML suatu elemen dan dapat memproses tag HTML yang diberikan.

`textContent` lebih aman untuk menampilkan input pengguna karena teks yang dimasukkan tidak akan diinterpretasikan sebagai kode HTML. Hal ini dapat membantu mencegah serangan seperti Cross-Site Scripting (XSS) ketika menampilkan data yang berasal dari pengguna.

### 6. Bagaimana classList.toggle() dapat mengubah tampilan elemen HTML?

`classList.toggle()` merupakan metode JavaScript yang digunakan untuk menambahkan class jika class tersebut belum tersedia atau menghapusnya jika sudah tersedia.

Metode ini dapat digunakan untuk mengubah tampilan elemen HTML secara bergantian dengan memanfaatkan aturan CSS.

Contoh:

```javascript
teks.classList.toggle("highlight");
```

Jika class `highlight` belum ada, JavaScript akan menambahkannya. Jika sudah ada, class tersebut akan dihapus.

### 7. Sebutkan tiga skenario pengujian validasi formulir!

Tiga skenario pengujian validasi formulir adalah:

1. **Pengujian data kosong:** pengguna tidak mengisi nama, kemudian menekan tombol daftar. Sistem harus menampilkan pesan bahwa nama wajib diisi.
2. **Pengujian format email salah:** pengguna memasukkan alamat email dengan format tidak valid. Sistem harus menampilkan pesan bahwa email harus valid.
3. **Pengujian usia tidak sesuai:** pengguna memasukkan usia di bawah 17 atau di atas 100. Sistem harus menampilkan pesan bahwa usia harus berupa bilangan bulat antara 17 sampai 100.

Apabila seluruh data dimasukkan dengan benar, sistem akan menampilkan pesan bahwa validasi berhasil.

## 6. Kesimpulan

Berdasarkan praktikum yang telah dilakukan, dapat disimpulkan bahwa JavaScript DOM dan Event Handling memiliki peran penting dalam membuat halaman web menjadi lebih interaktif dan dinamis.

Melalui praktikum ini, konsep DOM dipelajari dengan cara memilih, mengubah, menambahkan, dan menghapus elemen HTML menggunakan JavaScript. Selain itu, penggunaan event seperti `click`, `input`, `change`, `submit`, dan `reset` memungkinkan halaman web merespons tindakan pengguna secara langsung.

Penerapan validasi formulir juga membantu memastikan data yang dimasukkan pengguna sesuai dengan ketentuan yang telah ditentukan. Melalui Mini Project dan eksperimen mandiri, pemahaman mengenai manipulasi DOM dan penanganan event dapat diterapkan dalam pembuatan fitur web sederhana.

Dengan demikian, praktikum ini memberikan pemahaman dasar mengenai cara menggabungkan HTML, CSS, dan JavaScript untuk menghasilkan halaman web yang lebih interaktif, responsif, dan mudah digunakan.