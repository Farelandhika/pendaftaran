document.getElementById('formPendaftaran').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('successMsg').classList.remove('hidden');
    this.reset();
  });
 
  document.getElementById('formPendaftaran').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Ambil nilai input form
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const alasan = document.getElementById('alasan').value.trim();
  
    if (!nama || !email || !alasan) {
      alert("Mohon lengkapi semua data sebelum mengirim.");
      return;
    }
  
    // Nomor WA tujuan (tanpa +, tanpa spasi)
    const nomorWA = '6285755672948'; // Ganti dengan nomor admin PMR
  
    // Format pesan WhatsApp
    const pesan = `🩺 *PENDAFTARAN ANGGOTA PMR* 🩺%0A
  Nama: ${nama}%0A
  Email: ${email}%0A
  Alasan bergabung:%0A${alasan}`;
  
    // Buka WhatsApp
    const linkWA = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(linkWA, '_blank');
  });
  