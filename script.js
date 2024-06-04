// -------about review slider
let reviews = document.querySelectorAll(".wrapper");
let currentReviews = [0, 2]; // Starting indexes

let updateSlider = (cards) => {
  cards.forEach((card_index) => {
    reviews[card_index].classList.add("active");
  });
};

setInterval(() => {
  currentReviews.forEach((card_index, i) => {
    reviews[card_index].classList.remove("active");
    currentReviews[i] = card_index === reviews.length - 1 ? 0 : card_index + 1;
  });
  setTimeout(() => {
    updateSlider(currentReviews);
  }, 250);
}, 5000);

updateSlider(currentReviews);

// -----faq-----
let faqs = [...document.querySelectorAll(".faq")];

faqs.map((faq) => {
  let quiz = faq.querySelector(".question");

  quiz.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// ----discount slider----
let slider = document.querySelector(".dishes");

let rotationValue = 0;

setInterval(() => {
  rotationValue += 120;

  slider.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`;
}, 3000);

// ----nav toggler
let navToggler = document.querySelector(".toggler");
let linksContainer = document.querySelector(".Links");

if (navToggler && linksContainer) {
  navToggler.addEventListener("click", () => {
    navToggler.classList.toggle("active");
    linksContainer.classList.toggle("active");
  });
}

// ----AOS
AOS.init();
