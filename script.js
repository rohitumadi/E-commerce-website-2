const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const shop = document.getElementById("shop");
const contact = document.getElementById("contact");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", (e) => {
    nav.classList.remove("active");
    e.preventDefault();
  });
}
if (shop) {
  shop.addEventListener("click", () => {
    nav.classList.remove("active");
    // e.preventDefault();
  });
}
if (contact) {
  contact.addEventListener("click", () => {
    nav.classList.remove("active");

    // e.preventDefault();
  });
}
