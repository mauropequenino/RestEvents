export default function galery() {
  const modal = document.querySelector(".modal");

  const close = () => modal.classList.add("hidden");

  const changeSrc = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    const src = e.target.getAttribute("src");
    imgModal.setAttribute("src", src);
  };

  function makeLoop(elements) {
    elements.forEach((img) => {
      img.addEventListener("click", changeSrc);
      img.addEventListener("touchstart", changeSrc);
    });
  }

  // antes
  const imgs = document.querySelectorAll(".image-galeria img");

  // ja la
  const galeriaImgs = document.querySelectorAll(".modalGalery img");
  const imgModal = document.querySelector(".imageModal");
  const spa = modal.querySelector("span");

  makeLoop(galeriaImgs);
  makeLoop(imgs);

  spa.addEventListener("click", close);
  spa.addEventListener("touchstart", close);
}
