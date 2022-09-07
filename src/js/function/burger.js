export const menu = (() => {
   const burger = document.querySelector(".header__toggler");
   const nav = document.querySelector(".header__nav-collaps");
   const overlay = document.querySelector("#overlay");

   burger.addEventListener("click", () => {
      burger.classList.toggle("header__toggler-open");
      nav.classList.toggle("header__nav-open");
      overlay.classList.toggle("header__overlay-open");
   });
})();
