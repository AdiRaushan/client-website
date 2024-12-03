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

  // Ensure the element exists before proceeding
  if (!csUL) {
    console.error("Element #cs-expanded not found.");
    return;
  }

  // Get the current state of the aria-expanded attribute
  let csExpanded = csUL.getAttribute("aria-expanded");

  // If the attribute doesn't exist, initialize it with "false"
  if (csExpanded === null) {
    csUL.setAttribute("aria-expanded", "false");
    csExpanded = "false"; // Update csExpanded to "false" after initializing
  }

  // Toggle the aria-expanded state
  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener("scroll", (e) => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector("body").classList.add("scroll");
  } else {
    document.querySelector("body").classList.remove("scroll");
  }
});

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

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

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
