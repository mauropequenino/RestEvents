export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function ScrollToSections(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    const sections = document.querySelector(href);

    const top = sections.offsetTop - 50;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", ScrollToSections);
  });
}
