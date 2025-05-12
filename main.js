
function cariSiswa() {
  const nisn = document.getElementById("nisn").value;
  if (!nisn) return;

  const siswaData = {
    nama: localStorage.getItem("nama"),
    nisn: localStorage.getItem("nisn"),
    ttl: localStorage.getItem("ttl"),
    jk: localStorage.getItem("jk"),
    alamat: localStorage.getItem("alamat"),
    tahun: localStorage.getItem("tahun"),
    foto: localStorage.getItem("foto"),
    qr: localStorage.getItem("qr"),
    logo: localStorage.getItem("logo"),
    ttd: localStorage.getItem("ttd"),
  };

  if (siswaData.nisn) {
    document.getElementById("preview-kartu").style.display = "block";
    document.getElementById("nama-siswa").textContent = siswaData.nama;
    document.getElementById("nisn-siswa").textContent = siswaData.nisn;
    document.getElementById("ttl-siswa").textContent = siswaData.ttl;
    document.getElementById("jk-siswa").textContent = siswaData.jk;
    document.getElementById("alamat-siswa").textContent = siswaData.alamat;
    document.getElementById("tahun-siswa").textContent = siswaData.tahun;

    document.getElementById("foto-siswa").src = siswaData.foto || "";
    document.getElementById("qr-code").src = siswaData.qr || "";
    document.getElementById("logo-madrasah").src = siswaData.logo || "";
    document.getElementById("ttd").src = siswaData.ttd || "";
  }
}

function unduhPdf() {
  alert("Fitur unduh PDF belum diimplementasikan.");
}

function unduhGambar() {
  alert("Fitur unduh gambar belum diimplementasikan.");
}

function cetakKartu() {
  alert("Fitur cetak kartu belum diimplementasikan.");
}
