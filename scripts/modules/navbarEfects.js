export default function navbarEfects() {
  const sobre = document.getElementById("Sobre");
  const nav = document.querySelector("header .js-menu");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= sobre.offsetTop) {
      nav.classList.add("ative");
    } else {
      nav.classList.remove("ative");
    }
  });
}
