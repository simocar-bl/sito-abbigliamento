// ========================
// SLIDER
// ========================
document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const slideCount = slides.children.length;
  let index = 0;

  function showSlide(i) {
    index = (i + slideCount) % slideCount;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  slider.querySelector(".prev").addEventListener("click", () => {
    showSlide(index - 1);
  });

  slider.querySelector(".next").addEventListener("click", () => {
    showSlide(index + 1);
  });
});


// ========================
// FILTRO CATEGORIE
// ========================
const filtro = document.getElementById("filtroCategorie");
const sezioni = document.querySelectorAll(".categoria");

if (filtro) {
  filtro.addEventListener("change", () => {
    const valore = filtro.value;

    sezioni.forEach(sezione => {
      if (valore === "tutte" || sezione.id === valore) {
        sezione.style.display = "block";
      } else {
        sezione.style.display = "none";
      }
    });

    // Scroll automatico alla sezione scelta
    if (valore !== "tutte") {
      const target = document.getElementById(valore);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}
