(function () {
    emailjs.init({
        publicKey: "I2_BWKIBIqeLDOAS5"
    });
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const templateParams = {

        from_name:
            document.getElementById("name").value,

        from_email:
            document.getElementById("email").value,

        company:
            document.getElementById("company").value,

        service:
            document.getElementById("service").value,

        message:
            document.getElementById("message").value
    };

    emailjs.send(
        "service_9wiyp4k",
        "template_1hmw96q",
        templateParams
    )
    .then(function () {

        document.getElementById("success-message").innerHTML =
            "<p style='color:#22c55e;font-weight:600;'>✓ Message sent successfully!</p>";

        contactForm.reset();

    })
    .catch(function (error) {

        console.error(error);

        document.getElementById("success-message").innerHTML =
            "<p style='color:#ef4444;font-weight:600;'>✗ Failed to send message.</p>";
    });

});