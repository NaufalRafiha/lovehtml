// Fungsi untuk membuat elemen hati jatuh
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-falling");

    // Posisi awal hati secara horizontal acak
    heart.style.left = Math.random() * 100 + "vw";
    
    // Durasi jatuh acak
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Tambahkan hati ke dalam #heartRain
    document.getElementById("heartRain").appendChild(heart);

    // Hapus elemen hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Membuat hati jatuh setiap 300ms
setInterval(createFallingHeart, 300);
