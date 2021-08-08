import scrollSuave from "./modules/scroolsuave.js";
import typewriter from "./modules/typewriter.js";
import navbarEfects from "./modules/navbarEfects.js";
import galery from "./modules/galery.js";
import menuMobile from "./modules/menuMobile.js";

window.addEventListener("load", () => {
  typewriter();
});

scrollSuave();
navbarEfects();
galery();
menuMobile();



window.scrollTo({ top: 0 });
