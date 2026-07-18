const CHECKOUT_URL = "https://pay.cakto.com.br/3dndfz5_988371";

const checkoutLinks = document.querySelectorAll(".js-checkout");
const notice = document.querySelector(".checkout-notice");
let noticeTimer;

checkoutLinks.forEach((link) => {
  if (CHECKOUT_URL) {
    link.href = CHECKOUT_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    clearTimeout(noticeTimer);
    notice.textContent = "O checkout da Cakto será conectado aqui antes da publicação.";
    notice.classList.add("visible");
    noticeTimer = setTimeout(() => notice.classList.remove("visible"), 3500);
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
