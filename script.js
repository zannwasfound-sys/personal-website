/*
  ╔════════════════════════════════════════════════════════╗
  ║           SCRIPT.JS — FILE JAVASCRIPT                  ║
  ║                                                        ║
  ║  File ini menangani semua interaktivitas website.      ║
  ║  Isi:                                                  ║
  ║  1. Data Terjemahan (Indonesia ↔ Inggris)              ║
  ║  2. Sistem Partikel Mengambang                         ║
  ║  3. Toggle Tema (Gelap ↔ Terang)                       ║
  ║  4. Toggle Bahasa (ID ↔ EN)                            ║
  ║  5. Navbar (scroll + animasi klik)                     ║
  ║  6. Menu Mobile (hamburger)                            ║
  ║  7. Animasi Scroll (IntersectionObserver)              ║
  ║  8. Flip Card Sertifikat (3D)                          ║
  ║  9. Kartu Polaroid Draggable + Tali                    ║
  ║  10. Inisialisasi (jalankan saat halaman siap)         ║
  ╚════════════════════════════════════════════════════════╝
*/

/* ═══════════════════════════════════════════════════════════
   1. DATA TERJEMAHAN
   
   Objek ini menyimpan semua teks dalam dua bahasa.
   Kunci (key) harus sama dengan nilai data-translate="..."
   di HTML.
   
   Cara tambah terjemahan baru:
   1. Tambah data-translate="key_baru" di HTML
   2. Tambah "key_baru": "teks indonesia" di bagian 'id'
   3. Tambah "key_baru": "english text" di bagian 'en'
   ═══════════════════════════════════════════════════════════ */
const translations = {
  id: {
    // ── Navbar ──
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_exp: 'Pengalaman',
    nav_cert: 'Sertifikat',
    nav_contact: 'Kontak',

    // ── Hero ──
    hero_status: 'Mahasiswa Teknik Informatika',
    hero_tagline: '"Seorang arsitek tidak membangun gedung dengan tangan kosong. ia menggunakan alat terbaik untuk memastikan presisi"',
    hero_btn_about: 'Mau kenalan?',
    hero_btn_contact: 'Kontak',
    polaroid_caption: 'Pesan buat saya?😉',
    badge_student: 'Informatika 2025',
    badge_code: 'HTML · CSS · JS',
    badge_ai: 'AI Explorer',
    scroll_down: 'Scroll ke bawah',

    // ── About ──
    about_tag: '// tentang_saya',
    about_title: 'Siapa Aku?',
    about_p1: 'Halo! Aku mahasiswa Teknik Informatika semester 2 Universitas Komputer Indonesia yang lagi seru-serunya eksplor dunia digital. Belum jadi expert sih, tapi setiap hari belajar sesuatu yang baru dan itu yang bikin aku jadi penasaran dan semangat!',
    about_p2: 'Website ini bukan portofolio pro yang penuh klien dan projek besar. Ini lebih kayak "buku harian digital" yang nunjukkin perjalanan belajarku dari ngedit video, ngulik AI, sampai nyoba bikin website pertamaku walaupun masih dengan bantuan AI😅.',
    about_p3: 'Masih banyak yang mau aku pelajari, tapi yang penting mulai dulu, kan ya? 😄',
    fact_status: 'Status',
    fact_status_val: 'Mahasiswa Aktif UNIKOM Tahun 2025',
    fact_major: 'Jurusan',
    fact_major_val: 'Teknik Informatika',
    fact_focus: 'Fokus',
    fact_focus_val: 'Kreatif Digital & AI',
    fact_goal: 'Tujuan',
    fact_goal_val: 'Jadi Web Developer bagian Frontend',

    // ── Experience ──
    exp_tag: '// pengalaman',
    exp_title: 'Yang Udah Aku Kuasai',
    exp_sub: 'Bukan expert, tapi udah cukup tau gimana cara kerjanya 😄',
    now: 'sekarang',

    exp1_title: 'Video Editor',
    exp1_desc: 'Udah main CapCut sejak 2020, versi mobile dan juga udah terjun ke desktop juga. Dari yang cuma potong-potong video, sekarang udah bisa bikin konten yang lumayan enak dilihat. Mulai dari transisi, teks animasi, dan efek.',

    exp2_title: 'Photo Editor',
    exp2_years: '2021 - Sekarang',
    exp2_desc: 'Dari Pixellab buat desain logo, Canva buat poster & presentasi, Google Seed buat eksplorasi dan editing foto nature, sampai Photoshop Mobile buat hasil yang lebih pro. Banyak tools, makin banyak kreasi!',

    exp3_title: 'AI Enthusiast',
    exp3_desc: 'Sejak 2024 aktif eksplor berbagai tools AI. Saya suka banget cari-cari prompt yang unik dan menarik, apalagi kalau sudah menyangkut pemrograman dan Image Generator. Saya masih terus eksplor sampai sekarang karena AI berkembang super cepet,canggih dan juga mulai dibutuhkan.',

    exp4_title: 'Web Development',
    exp4_years: '~1 Tahun Belajar',
    exp4_desc: 'Masih dalam tahap belajar tapi udah lumayan ngerti konsep dasarnya. HTML buat struktur, CSS buat tampilan, JavaScript buat yang interaktif. Masih banyak yang belum dikuasai termasuk JavaScript yang masih sering bikin saya garuk kepala dan stress karena logikanya..😅',

    // ── Certificates ──
    cert_tag: '// sertifikat',
    cert_title: 'Sertifikat & Pencapaian',
    cert_sub: 'Klik kartunya buat lihat detailnya ya! 🃏',
    cert_img_hint: 'Taruh Foto Sertifikat',
    cert_size_hint: '(Disarankan rasio 4:3)',
    cert_flip: 'Klik untuk detail ↩',
    cert_back: 'Kembali ↩',

    cert1_name: 'Sertifikat Seminar Nasional UNIKOM & KPI',
    cert1_issuer: 'Direktorat Kemahasiswaan UNIKOM & KPI Pusat (2025)',
    cert1_date: 'November 7, 2025',
    cert1_desc: 'Sertifikat kepesertaan dalam Seminar Nasional dengan tema "Konten Penyiaran Vs Konten Media Baru Bagi Gen Z". Materi ini berfokus pada perbandingan dan adaptasi dunia penyiaran konvensional terhadap tren media baru di kalangan generasi muda."',

    cert2_name: 'Sertifikat International Scientific Virtual Talk #9 Cyber Security',
    cert2_issuer: 'CV. Semiotika bekerja sama dengan International Open University (IOU), The Gambia.',
    cert2_date: 'October 2, 2025',
    cert2_desc: 'Sertifikat internasional sebagai peserta dalam diskusi ilmiah bertajuk "Cyber Security". Acara ini merupakan kolaborasi lintas negara (India-Indonesia) yang membahas isu-isu keamanan siber di tingkat global.',

    cert3_name: 'Sertifikat International Scientific Virtual Talk #10 Penelitian Berbasis AI untuk Publikasi Jurnal Mahasiswa',
    cert3_issuer: 'CV. Semiotika & Local Government Rural Development Pakistan',
    cert3_date: 'October 14, 2025',
    cert3_desc: 'International Virtual Talk: Implementasi AI dalam Riset dan Publikasi Jurnal Ilmiah.',

    // ── Contact ──
    contact_tag: '// kontak',
    contact_title: 'MUNGKIN BUTUH SESUATU?',
    contact_sub: 'Mau ngobrol, kolaborasi, atau sekadar say hi? Langsung aja kepoin saya ya hahaha! 👋😂',
    contact_follow: 'Lihat Profil →',
    contact_chat: 'Chat Sekarang →',
    contact_note: 'Aku aktif di Instagram & WhatsApp. Respons biasanya dalam 1–24 jam ya! 😄',

    // ── Footer ──
    footer_made: 'Dibuat dengan bantuan AI + banyak trial & error yang harus manual fix😒',
    footer_copy: 'Semua konten milik Zann',
  },

  en: {
    // ── Navbar ──
    nav_home: 'Home',
    nav_about: 'About',
    nav_exp: 'Experience',
    nav_cert: 'Certificates',
    nav_contact: 'Contact',

    // ── Hero ──
    hero_status: 'Informatics Engineering Student',
    hero_tagline: '"An architect does not build a building with empty hands. He uses the best tools to ensure precision"',
    hero_btn_about: "Would you like to get to know me?",
    hero_btn_contact: 'Contact',
    polaroid_caption: "A message for me?😉",
    badge_student: 'Informatics 2025',
    badge_code: 'HTML · CSS · JS',
    badge_ai: 'AI Explorer',
    scroll_down: 'Scroll down',

    // ── About ──
    about_tag: '// about_me',
    about_title: 'Who Am I?',
    about_p1: "Hello! I am a second semester computer science student at Universitas Komputer Indonesia who is currently exploring the digital world. I'm not an expert yet, but every day I learn something new, and that's what makes me curious and excited!",
    about_p2: "This website is not a professional portfolio full of clients and big projects. It's more like a “digital diary” that shows my learning journey from editing videos, exploring AI, to trying to build my first website, even though it was still with the help of AI😅",
    about_p3: "Still so much to learn, but hey, gotta start somewhere right? 😄",
    fact_status: 'Status',
    fact_status_val: 'UNIKOM Active Student in 2025',
    fact_major: 'Major',
    fact_major_val: 'Informatics Engineering',
    fact_focus: 'Focus',
    fact_focus_val: 'Digital Creative & AI',
    fact_goal: 'Goal',
    fact_goal_val: 'Become a Frontend Web Developer',

    // ── Experience ──
    exp_tag: '// experience',
    exp_title: "What I've Been Up To",
    exp_sub: "Not an expert, but I know enough to get things done 😄",
    now: 'Now',

    exp1_title: 'Video Editor',
    exp1_desc: "I've been using CapCut since 2020, both the mobile and desktop versions. From just cutting videos, now I can create content that is quite pleasing to the eye. Starting from transitions, animated text, and effects.",

    exp2_title: 'Photo Editor',
    exp2_years: '2021 - Now',
    exp2_desc: 'From Pixellab for logo design, Canva for posters and presentations, Google Seed for exploring and editing nature photos, to Photoshop Mobile for more professional results. More tools, more creativity!',

    exp3_title: 'AI Enthusiast',
    exp3_desc: "Since 2024, I have been actively exploring various AI tools. I really enjoy searching for unique and interesting prompts, especially when it comes to programming and image generators. I am still exploring them today because AI is developing very quickly, becoming more sophisticated, and is starting to be needed.",

    exp4_title: 'Web Development',
    exp4_years: '~1 Year of Learning',
    exp4_desc: "I'm still learning, but I already understand the basic concepts pretty well. HTML is for structure, CSS is for appearance, and JavaScript is for interactivity. There's still a lot I haven't mastered, including JavaScript, which often makes me scratch my head and stress me out because of its logic.😅",

    // ── Certificates ──
    cert_tag: '// certificates',
    cert_title: 'Certificates & Achievements',
    cert_sub: 'Click a card to see the details! 🃏',
    cert_img_hint: 'Add Certificate Image',
    cert_size_hint: '(Recommended 4:3 ratio)',
    cert_flip: 'Click for details ↩',
    cert_back: 'Back ↩',

        cert1_name: 'UNIKOM & KPI National Seminar Certificate',
    cert1_issuer: 'UNIKOM Student Affairs Directorate & KPI Center (2025)',
    cert1_date: 'November 7, 2025',
    cert1_desc: 'Certificate of participation in the National Seminar with the theme “Broadcast Content vs. New Media Content for Gen Z.” This material focuses on the comparison and adaptation of the conventional broadcasting world to new media trends among the younger generation.',

    cert2_name: 'Certificate for International Scientific Virtual Talk #9 Cyber Security',
    cert2_issuer: 'CV. Semiotika collaborates with the International Open University (IOU), The Gambia.',
    cert2_date: 'October 2, 2025',
    cert2_desc: 'International certificate as a participant in a scientific discussion entitled “Cyber Security”. This event was a cross-border collaboration (India-Indonesia) that discussed cyber security issues at the global level.',

    cert3_name: 'Certificate for International Scientific Virtual Talk #10 Artificial Intelligence-Based Research for Student Journal Publications',
    cert3_issuer: 'CV. Semiotika & Local Government Rural Development Pakistan (2025)',
    cert3_date: 'October 14, 2025',
    cert3_desc: 'International Virtual Talk: Implementing AI in Research and Scientific Journal Publications.',

    // ── Contact ──
    contact_tag: '// contact',
    contact_title: 'Perhaps you need something?',
    contact_sub: 'Want to chat, collaborate, or just say hi? Go for it hahaha! 👋😂',
    contact_follow: 'View Profile →',
    contact_chat: 'Chat Now →',
    contact_note: "I'm active on Instagram & WhatsApp. Usually respond within 1–24 hours! 😄",

    // ── Footer ──
    footer_made: 'Created with the help of AI + lots of trial and error that had to be fixed manually😒',
    footer_copy: 'All content belongs to Zann',
  }
};

/* ═══════════════════════════════════════════════════════════
   VARIABEL STATUS GLOBAL
   Variabel yang dipakai di berbagai fungsi di bawah.
   'let' = bisa diubah nilainya nanti
   'const' = nilainya tetap tidak berubah
   ═══════════════════════════════════════════════════════════ */

// Bahasa aktif saat ini ('id' = Indonesia, 'en' = Inggris)
let currentLang = 'id';

// Tema aktif ('dark' atau 'light')
let currentTheme = 'dark';

/* ═══════════════════════════════════════════════════════════
   2. SISTEM PARTIKEL
   
   Cara kerja:
   - Canvas digambar ulang terus-menerus (60x per detik)
   - Setiap partikel punya posisi (x, y), kecepatan, dan ukuran
   - Saat partikel keluar dari layar, muncul dari sisi lain
   - Garis ditarik antara partikel yang berdekatan
   ═══════════════════════════════════════════════════════════ */

// Ambil elemen canvas dari HTML
const canvas = document.getElementById('particleCanvas');
// ctx = "context 2D" — alat untuk menggambar di canvas
const ctx = canvas.getContext('2d');

// Jumlah partikel yang akan dibuat
const PARTICLE_COUNT = 60;

// Array yang menyimpan semua partikel
let particles = [];

// Posisi mouse (untuk interaksi partikel dengan kursor)
let mouse = { x: null, y: null };

// Fungsi: sesuaikan ukuran canvas dengan ukuran layar
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Kelas Partikel — template untuk membuat tiap partikel
class Particle {
  constructor() {
    this.reset(); // Inisialisasi posisi dan sifat awal
  }

  // Reset/inisialisasi ulang partikel ke posisi acak
  reset() {
    this.x = Math.random() * canvas.width;      // Posisi X acak
    this.y = Math.random() * canvas.height;     // Posisi Y acak
    this.size = Math.random() * 2 + 0.5;        // Ukuran 0.5–2.5px
    this.speedX = (Math.random() - 0.5) * 0.4; // Kecepatan X (-0.2 s/d 0.2)
    this.speedY = (Math.random() - 0.5) * 0.4; // Kecepatan Y
    this.opacity = Math.random() * 0.5 + 0.1;  // Transparansi 10%–60%
    // Kecepatan berkedip (opacity naik-turun)
    this.blinkSpeed = Math.random() * 0.005 + 0.002;
    this.blinkDir = Math.random() > 0.5 ? 1 : -1; // Arah: naik atau turun
  }

  // Update posisi partikel setiap frame
  update() {
    this.x += this.speedX; // Geser X
    this.y += this.speedY; // Geser Y

    // Efek kedip: opacity naik turun
    this.opacity += this.blinkSpeed * this.blinkDir;
    if (this.opacity >= 0.6) this.blinkDir = -1; // Balik arah turun
    if (this.opacity <= 0.05) this.blinkDir = 1; // Balik arah naik

    // Kalau partikel keluar layar, muncul dari sisi berlawanan
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  // Gambar partikel ke canvas
  draw() {
    // ⚠️ PENTING: baca dari document.body, BUKAN document.documentElement!
    // Karena class ".light-mode" ada di <body>, bukan di <html>.
    // Kalau baca dari documentElement (html), variabel warna tidak terupdate
    // saat ganti tema → makanya partikel tetap putih di light mode!
    const color = getComputedStyle(document.body)
      .getPropertyValue('--particle-color').trim() || '255, 255, 255';

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
    ctx.fill();
  }
}

// Buat semua partikel
function initParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }
}

// Gambar garis antara partikel yang berdekatan
function connectParticles() {
  // Sama seperti draw() — baca dari body supaya warna ikut tema
  const color = getComputedStyle(document.body)
    .getPropertyValue('--particle-color').trim() || '255, 255, 255';

  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      // Hitung jarak antara dua partikel
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Gambar garis hanya kalau jarak < 120px
      const maxDist = 120;
      if (dist < maxDist) {
        // Makin jauh = makin transparan
        const opacity = (1 - dist / maxDist) * 0.15;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y); // Titik awal
        ctx.lineTo(particles[b].x, particles[b].y); // Titik akhir
        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

// Loop animasi utama partikel
// requestAnimationFrame = browser memanggil fungsi ini ~60x per detik
function animateParticles() {
  // Bersihkan canvas sebelum gambar ulang
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update dan gambar tiap partikel
  for (const p of particles) {
    p.update();
    p.draw();
  }

  // Gambar garis koneksi
  connectParticles();

  // Panggil lagi di frame berikutnya (loop terus)
  requestAnimationFrame(animateParticles);
}

/* ═══════════════════════════════════════════════════════════
   3. TOGGLE TEMA (GELAP / TERANG)
   
   Cara kerja:
   - Tambah/hapus class "dark-mode" dan "light-mode" di <body>
   - CSS sudah mengatur tampilan berdasarkan class ini
   ═══════════════════════════════════════════════════════════ */
function toggleTheme() {
  const body = document.body;

  if (currentTheme === 'dark') {
    // Ganti ke mode terang
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    currentTheme = 'light';
  } else {
    // Ganti ke mode gelap
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    currentTheme = 'dark';
  }

  // Simpan pilihan ke localStorage supaya diingat saat reload
  // localStorage.setItem('theme', currentTheme);
  // Kalau mau fitur ini aktif, hapus komentar di atas
}

/* ═══════════════════════════════════════════════════════════
   4. SISTEM BAHASA (INDONESIA / INGGRIS)
   
   Bug sebelumnya & kenapa:
   ─ el.textContent = value
     Kalau elemen punya anak HTML (child nodes), textContent
     akan MENGHAPUS semua anak itu lalu isi dengan teks polos.
     Akibatnya, elemen anak yang punya data-translate hilang
     dari DOM → klik terjemahan berikutnya tidak menemukan
     elemen itu lagi → teks tidak berubah → "balik ke awal".
   
   ─ Terjemahan tidak di-apply saat load
     Halaman mulai dengan teks Indonesia hardcoded di HTML.
     Saat user klik EN terus balik ID, teks diambil dari
     translations['id'] yang secara konten sama tapi format
     bisa beda (whitespace, dll) → user merasa "reset".
   
   Fix:
   ─ Pakai innerHTML alih-alih textContent
     innerHTML tidak merusak struktur HTML anak, lebih aman.
   
   ─ Apply terjemahan langsung di DOMContentLoaded
     Supaya state selalu diambil dari translations object,
     bukan dari HTML hardcode. Toggle pun selalu konsisten.
   
   ─ Simpan SEMUA teks asli HTML di Map sebelum ditimpa
     Jadi kalau ada key yang hilang di translations,
     kita bisa fallback ke teks aslinya, tidak kosong.
   ═══════════════════════════════════════════════════════════ */

// Map untuk simpan teks/HTML asli tiap elemen (key = data-translate value)
// Map = struktur data seperti objek tapi key-nya bisa apa saja
const originalContent = new Map();

// Fungsi: simpan semua konten asli dari HTML sebelum ditimpa terjemahan
// Dipanggil SEKALI saat halaman pertama load
function snapshotOriginalContent() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    // Simpan innerHTML (bukan textContent) supaya struktur HTML terjaga
    // Tapi karena teks kita tidak ada HTML di dalamnya, bisa pakai textContent juga
    // Kita pakai trim() untuk hapus whitespace awal/akhir dari HTML indented
    if (!originalContent.has(key)) {
      originalContent.set(key, el.innerHTML.trim());
    }
  });
}

// Fungsi terapkan terjemahan ke semua elemen
function applyTranslations() {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(el => {
    const key = el.getAttribute('data-translate');

    // Cek apakah terjemahan untuk key ini tersedia
    const terjemahan = translations[currentLang]?.[key];

    if (terjemahan) {
      // ✅ Pakai innerHTML bukan textContent!
      // Alasan: innerHTML tidak merusak child elements.
      // textContent AKAN merusak child elements (child node hilang dari DOM).
      el.innerHTML = terjemahan;
    } else {
      // Kalau key tidak ada di translations, fallback ke konten asli HTML
      // supaya tidak kosong/blank
      const fallback = originalContent.get(key);
      if (fallback !== undefined) {
        el.innerHTML = fallback;
      }
      // Log ke console supaya mudah debug key yang missing
      console.warn(`[Terjemahan] Key tidak ditemukan: "${key}" untuk bahasa "${currentLang}"`);
    }
  });
}

function toggleLanguage() {
  // Ganti bahasa aktif
  currentLang = currentLang === 'id' ? 'en' : 'id';

  // Update label tombol bahasa
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = currentLang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    // Animasi kecil tombol
    langLabel.style.transform = 'scale(0.8)';
    setTimeout(() => { langLabel.style.transform = 'scale(1)'; }, 150);
  }

  // Terapkan semua terjemahan
  applyTranslations();
}

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL KUSTOM (pakai requestAnimationFrame)
   
   Kenapa tidak pakai window.scrollTo({ behavior:'smooth' })?
   Karena cara itu bisa tidak jalan kalau:
   - Body punya overflow-x: hidden
   - Browser lama tidak support
   - Ada CSS yang "memblokir" scroll behavior
   
   Solusi: kita animasikan scroll sendiri pakai requestAnimationFrame.
   Cara kerja:
   1. Catat posisi scroll awal (start) dan tujuan (end)
   2. Setiap frame, hitung posisi antara (interpolasi easing)
   3. Geser scroll ke posisi itu
   4. Ulangi sampai sampai tujuan
   
   easeInOutCubic = fungsi easing supaya scroll
   terasa lambat di awal, cepat di tengah, lambat lagi di akhir
   (tidak seperti lari lurus yang kaku)
   ═══════════════════════════════════════════════════════════ */

// Fungsi easing — mengubah angka 0–1 menjadi kurva halus
// t = progress (0 = awal, 1 = selesai)
function easeInOutCubic(t) {
  // Rumus kurva cubic: lambat → cepat → lambat
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Fungsi scroll halus ke posisi Y tertentu
// targetY   = posisi tujuan (piksel dari atas halaman)
// duration  = durasi animasi dalam milidetik (default 700ms)
function smoothScrollTo(targetY, duration = 700) {
  const startY   = window.scrollY;           // Posisi scroll sekarang
  const distance = targetY - startY;         // Jarak yang harus ditempuh
  let   startTime = null;                    // Waktu mulai animasi

  // Kalau sudah di posisi itu, tidak perlu scroll
  if (Math.abs(distance) < 2) return;

  // Fungsi yang dipanggil setiap frame oleh browser
  function step(currentTime) {
    // Set waktu mulai saat pertama dipanggil
    if (!startTime) startTime = currentTime;

    // Hitung sudah berapa lama berjalan (0 → duration)
    const elapsed  = currentTime - startTime;

    // Konversi ke progress 0.0 → 1.0, maksimal 1
    const progress = Math.min(elapsed / duration, 1);

    // Terapkan fungsi easing ke progress
    const eased    = easeInOutCubic(progress);

    // Hitung posisi scroll saat ini berdasarkan easing
    const currentY = startY + distance * eased;

    // Geser scroll ke posisi ini
    // Kita scroll document.documentElement (HTML) langsung —
    // ini lebih reliable dari window.scrollTo di semua browser
    document.documentElement.scrollTop = currentY;
    document.body.scrollTop            = currentY; // fallback untuk browser lama

    // Kalau belum selesai, panggil lagi di frame berikutnya
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  // Mulai loop animasi
  requestAnimationFrame(step);
}


/* ═══════════════════════════════════════════════════════════
   5. NAVBAR — SCROLL & ANIMASI KLIK
   ═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // ─ a) Deteksi scroll — tambah shadow saat di-scroll ─
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // ─ b) Klik nav link: animasi ripple + smooth scroll ─
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Cegah lompat langsung tanpa animasi (default browser)
      e.preventDefault();

      // ── Animasi ripple ──
      // Hapus dulu dari semua link supaya bisa diulang tiap klik
      navLinks.forEach(l => {
        l.classList.remove('clicked');
        void l.offsetWidth; // reset paksa animasi CSS
      });
      this.classList.add('clicked');
      setTimeout(() => this.classList.remove('clicked'), 500);

      // ── Scroll halus ke target ──
      const targetId = this.getAttribute('href'); // contoh: "#about"
      const target   = document.querySelector(targetId);

      if (target) {
        // Tinggi navbar (72px) — dikurangi supaya judul tidak ketutupan navbar
        const NAV_HEIGHT = 72;

        // Posisi section dari atas halaman (bukan dari atas viewport)
        // getBoundingClientRect().top = dari atas LAYAR (berubah saat scroll)
        // + window.scrollY = konversi ke dari atas HALAMAN (tidak berubah)
        const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

        // Jalankan scroll halus kustom kita
        smoothScrollTo(targetY, 750); // 750ms durasi — enak di mata
      }

      // Tutup menu mobile kalau terbuka
      closeMobileMenu();
    });
  });
}

// Fungsi: tandai link aktif berdasarkan section yang terlihat
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    // Cari link yang sesuai dengan section ini
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < bottom) {
      // Hapus active dari semua
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      // Tambah active ke link ini
      if (link) link.classList.add('active');
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   6. MENU MOBILE (HAMBURGER)
   ═══════════════════════════════════════════════════════════ */
function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Toggle class "open" — CSS yang atur tampilan menu
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════
   7. ANIMASI SCROLL (INTERSECTION OBSERVER)
   
   Cara kerja:
   - IntersectionObserver "mengawasi" elemen-elemen tertentu
   - Saat elemen masuk ke viewport (terlihat di layar),
     tambah class "visible"
   - CSS sudah mengatur animasi saat class "visible" aktif
   
   Kenapa tidak pakai scroll event biasa?
   IntersectionObserver jauh lebih efisien dan tidak
   bikin website lemot.
   ═══════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  // Elemen-elemen yang mau dianimasi saat terlihat
  const animateElements = document.querySelectorAll(
    '.section-header, .about-text p, .fact-card, ' +
    '.exp-card, .cert-container, .contact-card'
  );

  // Buat observer dengan opsi
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Elemen terlihat di layar
        const el = entry.target;
        // Ambil delay (jeda) dari atribut data-delay jika ada
        const delay = el.dataset.delay || 0;

        setTimeout(() => {
          el.classList.add('visible');
        }, parseInt(delay));

        // Berhenti mengawasi setelah animasi tampil
        // (tidak perlu animasi lagi kalau sudah terlihat)
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,  // Mulai animasi saat 10% elemen terlihat
    rootMargin: '0px 0px -50px 0px' // Offset sedikit supaya tidak terlalu dini
  });

  // Mulai awasi tiap elemen
  animateElements.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   8. FLIP CARD SERTIFIKAT (3D)
   
   Cara kerja:
   - Fungsi dipanggil saat kartu diklik (onclick di HTML)
   - Toggle class "flipped" — CSS yang handle rotasi 3D-nya
   ═══════════════════════════════════════════════════════════ */
function flipCard(container) {
  // Toggle = kalau ada hapus, kalau tidak ada tambah
  container.classList.toggle('flipped');

  // Efek visual kecil: sedikit scale saat flip
  container.style.transform = 'scale(0.97)';
  setTimeout(() => {
    container.style.transform = '';
  }, 100);
}

/* ═══════════════════════════════════════════════════════════
   9. KARTU POLAROID DRAGGABLE + TALI KARET (SPRING PHYSICS)
   
   Cara kerja:
   - Canvas rope menggambar tali dari titik anchor (atas) ke kartu
   - Tali digambar sebagai kurva bezier (melengkung alami)
   - Kartu bisa di-drag (mouse dan touch)
   - Saat dilepas → kartu balik ke posisi asal seperti karet!
   
   Fisika spring (pegas/karet):
   - Setiap frame, hitung "gaya" yang menarik kartu ke posisi asal
   - Makin jauh dari posisi asal → makin kuat tarikannya
   - Ada "redaman" (damping) supaya tidak mental-mental terus
   - Rumus: velocity += (restPos - cardPos) * stiffness
             velocity *= damping   ← perlambat pelan-pelan
             cardPos  += velocity
   ═══════════════════════════════════════════════════════════ */
function initRopeCard() {
  const ropeCanvas = document.getElementById('ropeCanvas');
  const card = document.getElementById('polaroidCard');
  const ropeSection = document.getElementById('ropeSection');

  if (!ropeCanvas || !card || !ropeSection) return;

  const ropeCtx = ropeCanvas.getContext('2d');

  // ── State drag ──
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  // ── Posisi saat ini (yang tampil di layar) ──
  let cardX = 0;
  let cardY = 0;

  // ── Posisi "istirahat" — kartu akan selalu kembali ke sini ──
  let restX = 0;
  let restY = 0;

  // ── Kecepatan kartu (untuk fisika spring) ──
  let velX = 0;
  let velY = 0;

  // ── Konstanta fisika — kamu bisa ubah ini! ──
  //
  // STIFFNESS (kekakuan pegas):
  // - Nilai tinggi (0.2+) = balik super cepat, kaku
  // - Nilai rendah (0.04) = balik pelan, lembut & elastis
  // - Rekomendasi: 0.08–0.12 buat efek karet yang enak
  const STIFFNESS = 0.10;
  //
  // DAMPING (redaman / gesekan):
  // - Nilai mendekati 1.0 (0.95+) = lama berhenti, mental-mental banyak
  // - Nilai rendah (0.75) = cepat berhenti, tidak banyak mental
  // - Rekomendasi: 0.82–0.88 buat efek karet nyata
  const DAMPING = 0.84;

  // Anchor tali (paku di atas)
  let anchorX = 0;
  let anchorY = 0;

  // ── Sesuaikan ukuran canvas + reset posisi ──
  function resizeRopeCanvas() {
    ropeCanvas.width = ropeSection.offsetWidth;
    ropeCanvas.height = ropeSection.offsetHeight;

    anchorX = ropeCanvas.width / 2;
    anchorY = 10;

    // Posisi istirahat: tengah canvas, 90px dari atas
    restX = ropeCanvas.width / 2;
    restY = 90;

    // Kalau baru pertama kali, taruh kartu di posisi istirahat
    if (cardX === 0 && cardY === 0) {
      cardX = restX;
      cardY = restY;
    }

    updateCardPosition();
  }

  // ── Update visual posisi kartu di DOM ──
  function updateCardPosition() {
    card.style.left = (cardX - card.offsetWidth / 2) + 'px';
    card.style.top = cardY + 'px';
  }

  // ── Gambar tali (rope) dari anchor ke kartu ──
  function drawRope() {
    ropeCtx.clearRect(0, 0, ropeCanvas.width, ropeCanvas.height);

    const x1 = anchorX, y1 = anchorY;
    const x2 = cardX,   y2 = cardY;

    // Hitung kelengkungan tali berdasarkan jarak kartu dari anchor
    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    // Saat kartu ditarik jauh, tali meregang (sag berkurang, lebih lurus)
    // Saat kartu di posisi asal, tali melengkung santai
    const sag = Math.max(dist * 0.25, 20);
    const cpX = (x1 + x2) / 2;
    const cpY = Math.max(y1, y2) + sag;

    const isDark = document.body.classList.contains('dark-mode');

    // ── Bayangan tali (efek kedalaman) ──
    ropeCtx.beginPath();
    ropeCtx.moveTo(x1 + 1, y1 + 1);
    ropeCtx.quadraticCurveTo(cpX + 1, cpY + 1, x2 + 1, y2 + 1);
    ropeCtx.strokeStyle = isDark
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.1)';
    ropeCtx.lineWidth = 2.5;
    ropeCtx.stroke();

    // ── Tali utama ──
    ropeCtx.beginPath();
    ropeCtx.moveTo(x1, y1);
    ropeCtx.quadraticCurveTo(cpX, cpY, x2, y2);
    ropeCtx.strokeStyle = isDark
      ? 'rgba(255, 255, 255, 0.55)'
      : 'rgba(0, 0, 0, 0.45)';
    ropeCtx.lineWidth = 2;
    ropeCtx.lineCap = 'round';
    ropeCtx.stroke();

    // ── Paku di anchor ──
    ropeCtx.beginPath();
    ropeCtx.arc(x1, y1, 5, 0, Math.PI * 2);
    ropeCtx.fillStyle = isDark
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0, 0, 0, 0.55)';
    ropeCtx.fill();

    // ── Titik kecil di ujung tali (tempat tali nyambung ke kartu) ──
    ropeCtx.beginPath();
    ropeCtx.arc(x2, y2, 3, 0, Math.PI * 2);
    ropeCtx.fillStyle = isDark
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.3)';
    ropeCtx.fill();
  }

  // ── Loop utama: fisika spring + gambar ulang setiap frame ──
  function animateRope() {
    // Kalau TIDAK sedang di-drag, aktifkan fisika spring
    if (!isDragging) {
      const dx = restX - cardX;
      const dy = restY - cardY;

      velX += dx * STIFFNESS;
      velY += dy * STIFFNESS;
      velX *= DAMPING;
      velY *= DAMPING;

      cardX += velX;
      cardY += velY;

      if (Math.abs(dx) < 0.01 && Math.abs(velX) < 0.01) { cardX = restX; velX = 0; }
      if (Math.abs(dy) < 0.01 && Math.abs(velY) < 0.01) { cardY = restY; velY = 0; }

      updateCardPosition();
    }

    // ── Miring/tilt kartu berdasarkan seberapa jauh dari posisi istirahat ──
    // Makin jauh ke kanan → miring kanan, makin jauh ke kiri → miring kiri
    // Makin jauh ke bawah → sedikit scale membesar (efek gravitasi)
    // Nilai offset dari rest position:
    const offsetX = cardX - restX;  // Negatif = kiri, positif = kanan
    const offsetY = cardY - restY;  // Negatif = atas, positif = bawah

    // Konversi offset ke derajat kemiringan (bagi 8 supaya tidak terlalu ekstrem)
    // + 8 = kemiringan bawaan saat diam (supaya terlihat real seperti tergantung miring)
    const tiltDeg = (offsetX / 8) + 8;

    // Terapkan tilt ke kartu via CSS transform
    // rotate() = miring, scale() sedikit besar saat ditarik ke bawah
    const scaleVal = isDragging ? 1.04 : (1 + Math.max(0, offsetY) * 0.0003);
    card.style.transform = `rotate(${tiltDeg}deg) scale(${scaleVal})`;

    drawRope();
    requestAnimationFrame(animateRope);
  }

  // ── Mulai drag (mouse) ──
  card.addEventListener('mousedown', (e) => {
    isDragging = true;
    // Reset kecepatan saat mulai di-drag supaya tidak "loncat"
    velX = 0;
    velY = 0;

    const rect = card.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left - card.offsetWidth / 2;
    dragOffsetY = e.clientY - rect.top;

    card.classList.add('dragging');
    e.preventDefault();
  });

  // ── Gerak drag (mouse) ──
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const sectionRect = ropeSection.getBoundingClientRect();
    cardX = e.clientX - sectionRect.left - dragOffsetX;
    cardY = e.clientY - sectionRect.top - dragOffsetY;

    // ── BATAS DRAG ──
    // Kartu tidak boleh keluar dari area ropeSection.
    // Dengan ini, kartu tidak akan mengganggu foto profil & nama
    // yang ada di kolom kiri (hero-left) karena ropeSection
    // memang hanya ada di kolom kanan.
    const halfW = card.offsetWidth / 2;
    const padding = 12; // Jarak aman dari tepi section
    cardX = Math.max(halfW + padding, Math.min(ropeCanvas.width - halfW - padding, cardX));
    // Batas atas: jangan sampai kartu nutup paku (anchor) di y=10
    cardY = Math.max(40, Math.min(ropeCanvas.height - card.offsetHeight - padding, cardY));

    updateCardPosition();
  });

  // ── Lepas drag (mouse) → spring mulai bekerja! ──
  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('dragging');
    // velX & velY tetap 0 saat dilepas — spring langsung menarik balik
    // Kalau mau ada efek "lempar" (throw), bisa tambah velocity di sini
  });

  // ── Drag sentuh / touch (HP) ──
  card.addEventListener('touchstart', (e) => {
    isDragging = true;
    velX = 0;
    velY = 0;
    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    dragOffsetX = touch.clientX - rect.left - card.offsetWidth / 2;
    dragOffsetY = touch.clientY - rect.top;
    card.classList.add('dragging');
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const sectionRect = ropeSection.getBoundingClientRect();
    cardX = touch.clientX - sectionRect.left - dragOffsetX;
    cardY = touch.clientY - sectionRect.top - dragOffsetY;

    // Batas drag yang sama seperti mouse
    const halfW = card.offsetWidth / 2;
    const padding = 12;
    cardX = Math.max(halfW + padding, Math.min(ropeCanvas.width - halfW - padding, cardX));
    cardY = Math.max(40, Math.min(ropeCanvas.height - card.offsetHeight - padding, cardY));

    updateCardPosition();
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('touchend', () => {
    isDragging = false;
    card.classList.remove('dragging');
  });

  // ── Jalankan! ──
  resizeRopeCanvas();
  animateRope();

  window.addEventListener('resize', () => {
    // Saat resize, kartu ikut pindah ke posisi istirahat yang baru
    const prevRestX = restX;
    resizeRopeCanvas();
    // Sesuaikan posisi kartu relatif terhadap posisi istirahat baru
    cardX = cardX + (restX - prevRestX);
  });
}

/* ═══════════════════════════════════════════════════════════
   10. SMOOTH SCROLL UNTUK SEMUA LINK ANCHOR DI HALAMAN
   
   Fungsi ini menangkap SEMUA tag <a href="#..."> di luar navbar —
   termasuk tombol "Kenalan Yuk" dan "Hubungi Aku" di hero.
   
   Cara kerja:
   - Cari semua <a> yang href-nya diawali dengan "#"
   - Kalau belum punya event listener dari navbar, pasang satu
   - Pakai smoothScrollTo() yang sama supaya konsisten
   ═══════════════════════════════════════════════════════════ */
function initAnchorLinks() {
  // Ambil semua link anchor di halaman (href mulai dengan "#")
  // :not(.nav-link) = skip link navbar karena sudah dihandle di initNavbar()
  const allAnchors = document.querySelectorAll('a[href^="#"]:not(.nav-link)');

  allAnchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href'); // contoh: "#about"

      // Kalau href cuma "#" (link kosong), abaikan
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      // Cegah lompat langsung — kita yang handle scrollnya
      e.preventDefault();

      const NAV_HEIGHT = 72;
      const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

      // Pakai fungsi smoothScrollTo yang sama dengan navbar
      smoothScrollTo(targetY, 750);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   11. INISIALISASI UTAMA
   
   Semua fungsi di atas dipanggil di sini saat halaman siap.
   'DOMContentLoaded' = event yang terjadi saat HTML selesai dimuat
   (lebih cepat dari 'load' yang menunggu gambar selesai juga)
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ─ Partikel ─
  resizeCanvas();           // Sesuaikan ukuran canvas
  initParticles();          // Buat partikel
  animateParticles();       // Mulai animasi partikel

  // ─ Bahasa: simpan konten asli lalu apply terjemahan ID (supaya state konsisten) ─
  snapshotOriginalContent();  // Simpan HTML asli sebelum ditimpa apapun
  applyTranslations();        // Apply translations['id'] supaya state selalu dari objek ini,
                              // bukan dari HTML hardcode — toggle jadi selalu konsisten

  // ─ Navbar ─
  initNavbar();             // Setup navbar + animasi klik

  // ─ Semua link anchor (termasuk tombol CTA hero) ─
  initAnchorLinks();        // "Kenalan Yuk" & "Hubungi Aku" jadi smooth scroll juga

  // ─ Scroll Animations ─
  initScrollAnimations();   // Setup animasi scroll

  // ─ Kartu Tali ─
  initRopeCard();           // Setup kartu Polaroid draggable

  // ─ Footer tahun ─
  // Isi tahun di footer secara otomatis (tidak perlu update manual setiap tahun!)
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear();

  // ─ Tracking posisi mouse (untuk partikel) ─
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // ─ Resize handler ─
  window.addEventListener('resize', () => {
    resizeCanvas();       // Resize canvas partikel
    initParticles();      // Reset partikel (distribusi ulang)
  });

  // ─ Animasi muncul hero kiri saat load ─
  // Pastikan elemen hero kiri langsung terlihat
  setTimeout(() => {
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft) {
      heroLeft.style.opacity = '1';
      heroLeft.style.transform = 'translateY(0)';
    }
  }, 100);

});

/* ═══════════════════════════════════════════════════════════
   11. COIN FLIP — FOTO PROFIL (bulletproof mouse tracking)

   Root cause bug sebelumnya:
   ─ pendingLeave flag bisa kehilangan state kalau mouseenter +
     mouseleave terjadi sangat cepat selama animasi → kartu stuck
     di sisi belakang tanpa mau balik

   Fix: lacak posisi mouse SEKARANG (isHovered) bukan "apa yang
   terjadi selama animasi". Saat animasi selesai, cek langsung:
   "mouse masih di sini?" → kalau tidak → langsung flip balik.
   Tidak ada flag yang bisa hilang, tidak ada race condition.
   ═══════════════════════════════════════════════════════════ */
(function initPhotoFlip() {
  const scene = document.getElementById('photoFlipScene');
  const card  = document.getElementById('photoFlipCard');
  if (!scene || !card) return;

  const DURATION = 900;
  const SPIN     = 540;

  let currentDeg  = 0;
  let isAnimating = false;
  let isHovered   = false; // status mouse SEKARANG — selalu akurat
  let rafId       = null;

  card.style.transform = 'rotateY(0deg)';

  function ease(t) {
    if (t < 0.35) {
      const p = t / 0.35;
      return 0.35 * (p * p * p);
    }
    const p = (t - 0.35) / 0.65;
    return 0.35 + 0.65 * (1 - Math.pow(1 - p, 3));
  }

  function animate(fromDeg, toDeg, onDone) {
    if (rafId) cancelAnimationFrame(rafId);
    const startTime = performance.now();
    const delta     = toDeg - fromDeg;
    isAnimating     = true;

    function frame(now) {
      const t     = Math.min((now - startTime) / DURATION, 1);
      const eased = ease(t);
      card.style.transform = `rotateY(${fromDeg + delta * eased}deg)`;

      if (t < 1) {
        rafId = requestAnimationFrame(frame);
      } else {
        const landing = ((toDeg % 360) + 360) % 360; // 0 atau 180
        card.style.transform = `rotateY(${landing}deg)`;
        currentDeg  = landing;
        isAnimating = false;
        if (onDone) onDone();
      }
    }
    rafId = requestAnimationFrame(frame);
  }

  function showingVideo() {
    // currentDeg 180 = sisi video tampil
    return Math.round(currentDeg) === 180;
  }

  function flipToVideo() {
    animate(currentDeg, currentDeg + SPIN, () => {
      // Selesai flip ke video — kalau mouse sudah pergi, langsung balik
      if (!isHovered) flipToPhoto();
    });
  }

  function flipToPhoto() {
    animate(currentDeg, currentDeg + SPIN, () => {
      // Selesai flip ke foto — kalau mouse sudah masuk lagi, flip ke video
      if (isHovered) flipToVideo();
    });
  }

  scene.addEventListener('mouseenter', () => {
    isHovered = true;
    if (isAnimating) return; // animasi lagi jalan, onDone akan handle
    if (!showingVideo()) flipToVideo();
  });

  scene.addEventListener('mouseleave', () => {
    isHovered = false;
    if (isAnimating) return; // animasi lagi jalan, onDone akan handle
    if (showingVideo()) flipToPhoto();
  });
})();

/* ═══════════════════════════════════════════════════════════
   CATATAN UNTUK KAMU:
   
   Cara debug JavaScript:
   1. Klik kanan di browser → "Inspect" / "Periksa"
   2. Buka tab "Console"
   3. Error akan muncul di situ dengan warna merah
   4. Kamu bisa ketik console.log("test") di JS dan hasilnya
      keluar di Console untuk debug
   
   Kalau ada yang tidak jalan:
   - Pastikan nama file CSS dan JS benar di index.html
   - Pastikan semua tanda kurung { } [ ] () tertutup
   - Error JavaScript biasanya menyebutkan nomor baris
   ═══════════════════════════════════════════════════════════ */
