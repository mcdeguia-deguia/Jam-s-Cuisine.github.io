// ===== script.js =====

// Highlight active page in nav
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (currentPath === href) {
      link.classList.add("active");
    }
  });
});

// ===== Dark / Light Mode Toggle =====
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}

// Optional light mode CSS override
const style = document.createElement("style");
style.innerHTML = `
  body.light-mode {
    background: #f8f8f8;
    color: #111;
  }
  body.light-mode .btn.primary {
    background: #d38b2e;
    color: #000;
  }
  body.light-mode .main-nav a {
    color: #555;
  }
  body.light-mode .main-nav a.active {
    color: #000;
  }
`;
document.head.appendChild(style);

// ===== Example filter behavior (for Orders/Inventory) =====
document.querySelectorAll(".filter-group select").forEach(select => {
  select.addEventListener("change", (e) => {
    alert(`Filter applied: ${e.target.value}`);
  });
});
// Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".main-nav a");
  const path = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});
