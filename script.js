emailjs.init("uWI1ZdYG1PvIRLteG");

document
  .getElementById("contact-form")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
      "service_ihi7jja",
      "template_fal4oib",
      this
    )
    .then(() => {

      document.getElementById("success-message").style.display = "block";

      this.reset();

    })
    .catch((error) => {

      console.error(error);

      alert("Failed to send message. Please try again.");

    });

});