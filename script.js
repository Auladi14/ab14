// Fungsi simulasi perpindahan halaman (SPA System)
function switchTab(tabId) {
    // Sembunyikan semua halaman
    const screens = document.querySelectorAll('.screen-content');
    screens.forEach(screen => screen.classList.remove('active'));

    // Tampilkan halaman target
    const targetScreen = document.getElementById('page-' + tabId);
    if(targetScreen) {
        targetScreen.classList.add('active');
    }

    // Update status aktif pada navbar bawah (jika tab merupakan bagian dari nav utama)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    if(tabId === 'home') navItems[0].classList.add('active');
    if(tabId === 'cari') navItems[1].classList.add('active');
    if(tabId === 'favorit') navItems[2].classList.add('active');
    if(tabId === 'profile') navItems[3].classList.add('active');
}

// Simulasi Aksi Login -> Loading -> Home
function performLogin() {
    // Pindah ke halaman loading
    switchTab('loading');
    document.getElementById('main-nav').style.display = 'none'; // Sembunyikan nav saat loading

    // Delay 2 detik seolah-olah mengambil data dari server
    setTimeout(() => {
        document.getElementById('main-nav').style.display = 'flex'; // Munculkan nav bar
        switchTab('home'); // Pindah ke beranda utama
    }, 2000);
}

// Simulasi klik Mood -> Membuka Player Musik retro ala gambar 3
function playSongByMood(moodName) {
    switchTab('player');
    document.getElementById('current-mood-title').innerText = "Mood: " + moodName;
}

// Fitur Keluar (Logout) balik ke halaman login awal
function logout() {
    document.getElementById('main-nav').style.display = 'none';
    switchTab('login');
}

// Fitur Tambahan: Toggle show/hide password pada form login
document.addEventListener('DOMContentLoaded', function() {
    const togglePass = document.querySelector('.toggle-pass');
    const passwordInput = document.querySelector('input[type="password"]');
    
    if(togglePass && passwordInput) {
        togglePass.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }
});