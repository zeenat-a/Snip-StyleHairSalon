document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the visibility of the Book Appointment page
    function toggleBookAppointmentPage() {
        var bookAppointmentPage = document.getElementById("bookAppointmentPage");
        if (bookAppointmentPage) {
            if (bookAppointmentPage.style.display === "none") {
                bookAppointmentPage.style.display = "block";
            } else {
                bookAppointmentPage.style.display = "none";
            }
        } else {
            console.error("Book Appointment page element not found");
        }
    }

    var bookNowLink = document.querySelector(".navbar-links .nav-bar[href='#bookAppointmentPage']");

    if (bookNowLink) {
        bookNowLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            toggleBookAppointmentPage(); 
        });
    } else {
        console.error("BOOK NOW link element not found");
    }

    var bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Gather form data into an object
            const formData = {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                appointment_date: document.getElementById("appointment_date").value,
                appointment_time: document.getElementById("appointment_time").value
            };

            localStorage.setItem("appointmentData", JSON.stringify(formData));

            // Display the confirmation message
            var confirmationMessage = document.getElementById("confirmationMessage");
            if (confirmationMessage) {
                confirmationMessage.style.display = "block";
            } else {
                console.error("Confirmation message element not found");
            }

            // Hide the form
            bookingForm.style.display = "none";
        });
    } else {
        console.error("Booking form element not found");
    }
});
