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

// Animazione cards quando entrano nello schermo
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});

<script>
  document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const slide = slider.querySelectorAll('.slide');
    let index = 0;

    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');

    function showSlide(i) {
      if (i < 0) index = slide.length - 1;
      else if (i >= slide.length) index = 0;
      else index = i;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));
  });
</script>
