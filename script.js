// Initialize EmailJS with your user ID (from your EmailJS dashboard)
emailjs.init("CK0367y7ejTxamtfo");

document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect selected services
    const selectedServices = Array.from(document.querySelectorAll('input[name="services[]"]:checked'))
                                  .map(service => service.value);

    const formData = {
        fullName: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        contactNumber: document.getElementById("contact-number").value,
        businessName: document.getElementById("business-name").value,
        services: selectedServices.join(", "), // Join selected services as a comma-separated string
        message: document.getElementById("message").value,
    };

    emailjs.send("service_dg2lnt6", "template_7nwje3m", formData)
        .then(() => {
            alert("Your quote request has been sent successfully!");
            document.getElementById("quoteForm").reset();
        })
        .catch(() => {
            alert("Failed to send your request. Please try again.");
        });
});
