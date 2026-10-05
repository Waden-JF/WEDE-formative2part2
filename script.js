// Show a local confirmation instead of sending demo form data.
document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    status.textContent = "Thanks. This project form does not send or store your information.";
    status.hidden = false;
    form.reset();
  });
});
