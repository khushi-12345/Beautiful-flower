const flower = document.getElementById("flower");
const plant = document.querySelector(".plant");
const petals = document.getElementById("petals");
const button = document.getElementById("bloomBtn");
const starsContainer = document.getElementById("stars");

// Create 12 naturally arranged flower petals.
for (let i = 0; i < 12; i++) {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.setProperty("--angle", `${i * 30}deg`);
  petal.style.transitionDelay = `${i * 45}ms`;
  petals.appendChild(petal);
}

// Create randomly positioned stars.
for (let i = 0; i < 90; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.setProperty(
    "--duration",
    `${2 + Math.random() * 4}s`
  );
  star.style.animationDelay = `${Math.random() * 4}s`;
  starsContainer.appendChild(star);
}

let bloomed = false;
let timer;

function toggleBloom() {
  bloomed = !bloomed;

  flower.classList.toggle("bloomed", bloomed);
  plant.classList.toggle("grown", bloomed);

  button.textContent = bloomed
    ? "Close the Flower ✿"
    : "Make It Bloom ✿";

  flower.setAttribute(
    "aria-label",
    bloomed ? "Close flower" : "Open flower"
  );
}

flower.addEventListener("click", toggleBloom);
button.addEventListener("click", toggleBloom);

// Let the flower bloom automatically on page load.
timer = setTimeout(() => {
  if (!bloomed) toggleBloom();
}, 700);

// Add a gentle breeze effect after blooming.
flower.addEventListener("mouseenter", () => {
  if (bloomed) {
    flower.style.filter =
      "drop-shadow(0 0 27px #ff83b977)";
  }
});

flower.addEventListener("mouseleave", () => {
  flower.style.filter = "";
});