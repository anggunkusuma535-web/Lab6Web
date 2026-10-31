
// LATIHAN 1 - Mengubah teks dengan DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";


// LATIHAN 2 - Event Click
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " +
        new Date().toLocaleTimeString();
});


// LATIHAN 3 - Mengubah Kelas dan Gaya CSS

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});


// LATIHAN 4 - Event Input dan Penghitung Karakter

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// LATIHAN 5 - Validasi Formulir

const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
    pesanForm.textContent =
        "Nama harus memiliki minimal 3 karakter.";

} else if (!polaEmail.test(email)) {
    pesanForm.textContent =
        "Masukkan email yang valid.";

    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent =
            "Usia harus berupa bilangan bulat 17–100.";

    } else {
        pesanForm.textContent =
            "Validasi berhasil. Form siap diproses.";

        form.reset();
    }
});

// LATIHAN 6 - Membuat Daftar Tugas

const inputTugas = document.getElementById("inputTugas");
const tombolTambah = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tombolTambah.addEventListener("click", function () {

    const teks = inputTugas.value.trim();

    // Memeriksa apakah input kosong
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    // Membuat elemen tugas baru
    const item = document.createElement("li");
    const label = document.createElement("span");
    const tombolSelesai = document.createElement("button");
    const tombolHapus = document.createElement("button");

    label.textContent = teks + " ";

    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";

    // Event untuk menandai tugas selesai
    tombolSelesai.addEventListener("click", function () {

        item.classList.toggle("selesai");

        tombolSelesai.textContent =
            item.classList.contains("selesai")
                ? "Batalkan selesai"
                : "Tandai selesai";

    });

    // Event untuk menghapus tugas
tombolHapus.type = "button";
tombolHapus.textContent = "Hapus";

tombolHapus.addEventListener("click", function () {
    item.remove();
});

    // Memasukkan elemen ke daftar tugas
  item.append(label, tombolSelesai, tombolHapus);
  daftarTugas.appendChild(item);

    // Mengosongkan input
    inputTugas.value = "";

    pesanTugas.textContent = "Tugas ditambahkan.";

    inputTugas.focus();
});

// MINI PROJECT - Formulir Pendaftaran Workshop

const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

const hitungNama = document.getElementById("hitungNama");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

// Menghitung karakter nama secara langsung
namaWorkshop.addEventListener("input", function () {
    hitungNama.textContent = namaWorkshop.value.length;
});

// Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        ringkasanSesi.textContent =
            "Belum ada sesi yang dipilih.";
    } else {
        ringkasanSesi.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});

// Memvalidasi formulir ketika tombol daftar ditekan
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanWorkshop.textContent =
            "Nama lengkap wajib diisi.";

    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent =
            "Masukkan alamat email yang valid.";

    } else if (sesi === "") {
        pesanWorkshop.textContent =
            "Silakan pilih sesi workshop.";

   } else {
    formWorkshop.reset();

    hitungNama.textContent = "0";
    ringkasanSesi.textContent =
        "Belum ada sesi yang dipilih.";

    pesanWorkshop.textContent =
        "Pendaftaran berhasil! Terima kasih, " + nama + ".";
}
});

// Mengatur tampilan setelah tombol reset ditekan
formWorkshop.addEventListener("reset", function () {
    hitungNama.textContent = "0";
    ringkasanSesi.textContent =
        "Belum ada sesi yang dipilih.";
    pesanWorkshop.textContent = "";
});

// EKSPERIMEN 4 - Menampilkan dan Menyembunyikan Paragraf

const teksSembunyi = document.getElementById("teksSembunyi");
const tombolSembunyi = document.getElementById("tombolSembunyi");

tombolSembunyi.addEventListener("click", function () {
    teksSembunyi.classList.toggle("sembunyi");
});