export default function menuMobile() {
  let burger = document.getElementById("burger");
  const nav = document.querySelector(".navbar");

  const close = function () {
   burger.classList.remove("is-open");
    nav.classList.remove("is-open");
  };
  burger.addEventListener("click", function (e) {
    this.classList.toggle("is-open");
    nav.classList.toggle("is-open");

    nav.querySelectorAll("li a").forEach((item) => {
      item.addEventListener("click", close);
      item.addEventListener("touchstart", close);
    });
  });
}
