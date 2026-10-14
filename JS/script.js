const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Navigasi mobile
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuBtn.textContent = nav.classList.contains("open")
    ? "✕"
    : "☰";
});

// Tutup navigasi setelah memilih menu
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Tahun otomatis
document.getElementById("year").textContent =
  new Date().getFullYear();

// Pemesanan melalui WhatsApp
const nomorWhatsApp = "6285836121648";

document.querySelectorAll(".buy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const nama = button.dataset.name;
    const harga = Number(button.dataset.price);

    const hargaRupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(harga);

    const pesan =
      `Halo, saya ingin memesan ${nama}.%0A` +
      `Harga: ${hargaRupiah}.%0A` +
      `Apakah menu ini masih tersedia?`;

    const url =
      `https://wa.me/${nomorWhatsApp}?text=${pesan}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// Animasi saat elemen terlihat
const animatedElements = document.querySelectorAll(
  ".food-card, .contact-item"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}