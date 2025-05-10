document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("activo", idx === i);
      dots[idx].classList.toggle("activo", idx === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  setInterval(nextSlide, 5000);

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      index = idx;
      showSlide(index);
    });
  });
});
