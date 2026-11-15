
// Show and Hide About Section
const aboutToggle = document.getElementById("aboutToggle");
const extraAbout = document.getElementById("extraAbout");

aboutToggle.addEventListener("click", function () {
    extraAbout.hidden = !extraAbout.hidden;

    if (extraAbout.hidden) {
        aboutToggle.textContent = "More About Us";
    } else {
        aboutToggle.textContent = "Show Less";
    }
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !topic || !message) {
        formFeedback.textContent = "Please fill in all fields.";
        formFeedback.className = "form-feedback error";
        return;
    }

    if (message.length < 10) {
        formFeedback.textContent = "Message must contain at least 10 characters.";
        formFeedback.className = "form-feedback error";
        return;
    }

    if (!contactForm.checkValidity()) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.className = "form-feedback error";
        return;
    }

    formFeedback.textContent = "Your message has been checked successfully!";
    formFeedback.className = "form-feedback success";

    contactForm.reset();
});
