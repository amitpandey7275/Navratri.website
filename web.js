
// Change header background on scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ------------------ Smooth Scroll ------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      // mobile menu close after click
      nav.classList.remove("active");
    }
  });
});

// ------------------ Header Scroll Effect ------------------
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ------------------ Back to Top Button ------------------
const backBtn = document.createElement("button");
backBtn.innerText = "↑";
backBtn.id = "backToTop";
document.body.appendChild(backBtn);

backBtn.style.position = "fixed";
backBtn.style.bottom = "20px";
backBtn.style.right = "20px";
backBtn.style.padding = "10px 15px";
backBtn.style.fontSize = "20px";
backBtn.style.border = "none";
backBtn.style.borderRadius = "50%";
backBtn.style.background = "crimson";
backBtn.style.color = "#fff";
backBtn.style.cursor = "pointer";
backBtn.style.display = "none";
backBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
});

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


