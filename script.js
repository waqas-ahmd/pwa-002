document.querySelector("#email-btn").addEventListener("click", () => {
  window.open("mailto:test@example.com", "_parent");
});
document.querySelector("#call-btn").addEventListener("click", () => {
  window.open("callto:+393519557204", "_parent");
});
document.querySelector("#share-btn").addEventListener("click", () => {
  navigator.share({
    title: "Share Link",
    text: "Hello",
    url: "www.example.com",
  });
});
document.querySelector("#whatsapp-btn").addEventListener("click", () => {
  window.open(
    "https://api.whatsapp.com/send?phone=+39%20351%209557204&text=",
    "_blank"
  );
});
document.querySelector("#appointment-btn").addEventListener("click", () => {
  window.open("https://calendly.com/medicalaestetic", "_blank");
});
// document.querySelector("#gallery-btn").addEventListener("click", () => {
//   window.open("https://calendly.com/medicalaestetic", "_blank");
// });
