/* ======================
   THEME TOGGLE
====================== */
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ======================
   CURSOR GLOW
====================== */
const glow = document.querySelector(".cursor-glow");
let x = 0, y = 0, mx = 0, my = 0;

document.addEventListener("mousemove", e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateGlow() {
  x += (mx - x) * 0.1;
  y += (my - y) * 0.1;
  glow.style.left = x + "px";
  glow.style.top = y + "px";
  requestAnimationFrame(animateGlow);
}
animateGlow();

/* ======================
   SKILL PROGRESS
====================== */
document.querySelectorAll(".progress-bar").forEach(bar => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bar.style.width = bar.dataset.progress + "%";
      }
    });
  }, { threshold: 0.5 });

  observer.observe(bar);
});

/* ======================
   TIMELINE
====================== */
document.querySelectorAll(".timeline-item").forEach(item => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        item.classList.add("show");
      }
    });
  }, { threshold: 0.4 });

  observer.observe(item);
});
