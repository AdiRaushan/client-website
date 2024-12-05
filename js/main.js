// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#cs-navigation .cs-dropdown")
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}

/*  prodct js */

/* FAQ */
const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
for (const item of faqItems) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}

/* slides */
// Auto Slider Script
const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider > div");
const totalSlides = slides.length;

let currentIndex = 0;

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically switch slides every 3 seconds
setInterval(autoSlide, 3000);

/* pop up lead  */
// Get the modal and button elements

// Get the modal and button elements
let hasTriggered = false;
const modal = document.getElementById("excitingModal");
const modalContent = document.getElementById("modalContent");

// Scroll Trigger
window.addEventListener("scroll", () => {
  const triggerPoint = 0.1; // Trigger after 30% scroll
  const scrollPosition =
    document.documentElement.scrollTop / document.documentElement.scrollHeight;

  if (scrollPosition > triggerPoint && !hasTriggered) {
    modal.classList.remove("hidden");
    hasTriggered = true; // Ensure it triggers only once
  }
});

// Close Modal when clicking outside of it
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

// Close Modal when clicking on the close button
document.getElementById("closeExcitingModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Optional: Close the modal after form submission
const leadForm = document.getElementById("excitingLeadForm");
leadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Perform form submission (AJAX, etc.)
  console.log("Form Submitted!");
  modal.classList.add("hidden");
});

/* testing  */
function slideImage() {
  const imgShowcase = document.querySelector(".img-showcase img:first-child");
  if (!imgShowcase) {
    console.error("No images found in .img-showcase.");
    return;
  }

  const displayWidth = imgShowcase.clientWidth;
  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}
