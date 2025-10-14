function alertaPersonaliza() {
    alert("Gracias por tu interés. Pronto podrás personalizar directamente desde esta página.");
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const galeria = document.getElementById("galeria");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Cargar la imagen real
          img.classList.add("visible");
          observer.unobserve(img); // Ya no necesitamos seguir observándola
        }
      });
    }, {
      rootMargin: "100px",
      threshold: 0.1
    });
  
    // Cargar hasta 999 imágenes con nombres IMG001.jpg, IMG002.jpg, etc.
    for (let i = 1; i <= 999; i++) {
      const numero = String(i).padStart(3, '0');
      const wrapper = document.createElement("div");
      wrapper.classList.add("image-wrapper");
      
      const img = document.createElement("img");
      img.dataset.src = `IMG/IMG${numero}.jpg`;
      img.alt = `Producto personalizado ${numero}`;
      img.classList.add("lazy-img");
      
      img.onerror = () => wrapper.remove();
      
      wrapper.appendChild(img);
      galeria.appendChild(wrapper);
      observer.observe(img);
      
    }
  });
  
 // Lightbox funcional y centrado
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

// Mostrar imagen en lightbox
document.getElementById("galeria").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    lightboxImg.src = e.target.src;
    lightbox.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  }
});

// Cerrar con botón
lightboxClose.addEventListener("click", closeLightbox);

// Cerrar con clic fuera de imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  lightboxImg.src = "";
}

// Hero fade effect al hacer scroll
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Ajusta estos valores según el efecto deseado
  const fadeStart = 0;       // desde dónde empieza a desvanecerse
  const fadeEnd = 500;       // hasta dónde está completamente oculto

  // Calcula opacidad: de 1 (visible) a 0 (invisible)
  let opacity = 1;

  if (scrollY > fadeStart) {
    opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(opacity, 0); // nunca menos de 0
  }

  hero.style.opacity = opacity;
});

// Menú hamburguesa
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("abierto");
});
