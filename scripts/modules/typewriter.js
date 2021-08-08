export default function typewriter() {
  function typeWrit(element, phrase) {
    element.innerHTML = "";
    const textelement = phrase.split("");
    textelement.forEach(function (letter, i) {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 100 * i);
    });
  }

  let element = document.querySelector(".call-to-action h2");
  typeWrit(element, "O paraiso dos eventos");
}

