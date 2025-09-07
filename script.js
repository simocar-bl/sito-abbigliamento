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

  // autoplay
  setInterval(() => showSlide(index + 1), 4000);
});
