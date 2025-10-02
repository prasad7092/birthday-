// 🎂 Set target birthday date (24th Oct 2025 at midnight)
const birthday = new Date("Oct 24, 2025 00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "🎂 It's Today! 🎂";
  }
}, 1000);

// 🌻 Add floating sunflowers
for (let i = 0; i < 12; i++) {
  let flower = document.createElement("div");
  flower.classList.add("sunflower");
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (8 + Math.random() * 5) + "s";
  flower.style.opacity = Math.random();
  document.body.appendChild(flower);
}
