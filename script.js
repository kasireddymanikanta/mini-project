// Arrow function to validate form
const validateForm = () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const seats = document.getElementById("seats").value;
    const gender = document.getElementById("gender").value;
    const travelClass = document.getElementById("class").value;
    const payment = document.getElementById("payment").value;
    const message = document.getElementById("message");

    message.style.color = "red";

    // Check if name is provided
    if (name === "") {
        message.textContent = "Please enter your name.";
        return false;
    }

    // Validate gender selection
    if (gender === "") {
        message.textContent = "Please select your gender.";
        return false;
    }

    // Validate email pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.textContent = "Please enter a valid email.";
        return false;
    }

    // Validate travel date (should be in the future)
    const currentDate = new Date();
    const travelDate = new Date(date);
    if (travelDate <= currentDate) {
        message.textContent = "Travel date must be in the future.";
        return false;
    }

    // Check if 'from' and 'to' fields are filled
    if (from === "" || to === "") {
        message.textContent = "Please fill both departure and destination stations.";
        return false;
    }

    // Validate travel class selection
    if (travelClass === "") {
        message.textContent = "Please select your class.";
        return false;
    }

    // Validate number of seats
    if (seats < 1 || seats > 10) {
        message.textContent = "Number of seats must be between 1 and 10.";
        return false;
    }

    // Validate payment method
    if (payment === "") {
        message.textContent = "Please select a payment method.";
        return false;
    }

    // If all validations pass
    message.style.color = "green";
    message.textContent = "Booking successful! Your tickets are being processed.";
    return true;
};

