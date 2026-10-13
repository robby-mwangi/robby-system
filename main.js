// Your WhatsApp number in international format (no + or spaces)
const WHATSAPP_NUMBER = "254708779754";

// 1. Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// 2. Quote form: checks the fields, then opens WhatsApp with a ready message
const form = document.getElementById("quoteForm");
const errorBox = document.getElementById("formError");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const need = document.getElementById("need").value;
  const details = document.getElementById("details").value.trim();

  if (!name || !business || !phone || !need) {
    errorBox.textContent = "Please fill in your name, business, phone number and what you need.";
    return;
  }
  errorBox.textContent = "";

  const message =
    "Hello Robby, I would like a quotation.\n\n" +
    "Name: " + name + "\n" +
    "Business: " + business + "\n" +
    "Phone: " + phone + "\n" +
    "I need: " + need + "\n" +
    (details ? "About my business: " + details : "");

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener");
});

// 3. Footer year
document.getElementById("year").textContent = new Date().getFullYear();