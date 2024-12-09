// Navegação do carrossel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const indicators = document.querySelectorAll(".indicator");
  
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const itemWidth = document.querySelector(".carousel-item").offsetWidth;
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    };
  
    nextBtn.addEventListener("click", () => {
      if (currentIndex < indicators.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  });
  
  // Scroll suave para links de navegação
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100, // Ajuste o deslocamento se o cabeçalho estiver fixo
          behavior: "smooth"
        });
      }
    });
  });
  
  // Botão de retorno ao topo
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });
  
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Validação do formulário de contato
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
  
    if (name && phone && email) {
      alert("Formulário enviado com sucesso!");
      contactForm.reset();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
  