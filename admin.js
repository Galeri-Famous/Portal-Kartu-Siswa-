
document.getElementById("siswa-form").addEventListener("submit", function (e) {
  e.preventDefault();

  localStorage.setItem("nama", document.getElementById("input-nama").value);
  localStorage.setItem("nisn", document.getElementById("input-nisn").value);
  localStorage.setItem("ttl", document.getElementById("input-ttl").value);
  localStorage.setItem("jk", document.getElementById("input-jk").value);
  localStorage.setItem("alamat", document.getElementById("input-alamat").value);
  localStorage.setItem("tahun", document.getElementById("input-tahun").value);
  localStorage.setItem("kamad", document.getElementById("input-kamad").value);
  localStorage.setItem("tema", document.getElementById("input-tema").value);
  localStorage.setItem("fontsize", document.getElementById("input-fontsize").value);

  const upload = (id, key) => {
    const file = document.getElementById(id).files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        localStorage.setItem(key, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  upload("input-foto", "foto");
  upload("input-qr", "qr");
  upload("input-logo", "logo");
  upload("input-ttd", "ttd");

  alert("Data dan kustomisasi disimpan! Silakan cek halaman utama.");
});
