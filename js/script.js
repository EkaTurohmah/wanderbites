window.onload = function() {
    let userName = prompt("Welcome! Please enter your name:");
    if (userName && userName.trim() !== "") {
        // Find the header element by id and update its text
        let header = document.getElementById("opening");
        if (header) {
            header.textContent = `Welcome, ${userName}! to WanderBites`;
    }
};

/// Form validation
function validateForm() {
    /// Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    /// Simple validation
    if (name === "" || email === "" || message === "") {
        /// if any field is empty, show an allert
        alert("Please fill in all fields.");
    } else
                /// If all fields are filled, show a success message
                    alert(`Thank you, ${name}! for contacting us! We will get back to you soon.`);
            }
        }