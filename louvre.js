document.addEventListener("DOMContentLoaded", function () {
  const boutonDark = document.getElementById("darkModeBtn");

  boutonDark.addEventListener ("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      boutonDark.textContent = "Passez en Light Mode";
    } else {
      boutonDark.textContent = "Passez en Dark Mode";
    }
  });
});

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});