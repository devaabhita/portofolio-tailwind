const scrollUp = document.getElementById("scrollUp");

window.onscroll = () => {
   if (window.scrollY > 500) {
      scrollUp.classList.remove("bottom-[-50px]", "opacity-0");
      scrollUp.classList.add("bottom-10", "opacity-100");
   } else {
      scrollUp.classList.add("bottom-[-50px]", "opacity-0");
      scrollUp.classList.remove("bottom-10", "opacity-100");
   }
}