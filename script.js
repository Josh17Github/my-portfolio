const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const toggle = document.getElementById("darkToggle");
const confirmation = document.querySelector(".confirmation-popup");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Dark mode
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Carousel
const track = document.getElementById("track");
const items = track.children;
const totalItems = items.length;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const itemWidth = 330;
const visibleItems = 3;

if (totalItems <= visibleItems) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  track.style.transform = "translateX(0)";
} else {
  const maxIndex = totalItems - visibleItems;

  nextBtn.onclick = () => {
    index = Math.min(index + 1, maxIndex);
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  };

  prevBtn.onclick = () => {
    index = Math.max(index - 1, 0);
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  };
}

(function () {
  emailjs.init({
    publicKey: "FFeVykGzU9-UrdHAS",
  });
})();

function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_w8qcfhc", "template_ayuv0tc", params).then(
    (response) => {
      confirmation.style.display = "block";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    },
    (error) => {
      console.log("FAILED...", error);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    },
  );
}

closeBtn.addEventListener("click", () => {
  confirmation.style.display = "none";
  confirmation.style.transition = "transform 0.8 ease";
});
