document.getElementById("startJourney").addEventListener("click", function() {
    window.location.href = "signup.html"; // Redirect to the signup page
});

// Adding mouse events to the "Start the Journey" button
document.getElementById("journeyBtn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ff5722"; // Changes the button's background on mouse hover
    this.style.color = "#fff"; // Changes the text color on hover
});

document.getElementById("journeyBtn").addEventListener("mouseout", function() {
    this.style.backgroundColor = ""; // Reverts to the original background color
    this.style.color = ""; // Reverts to the original text color
});

document.getElementById("journeyBtn").addEventListener("click", function() {
    alert("Welcome to MindMatters! Let's begin your journey.");
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the logo image by ID
    const logo = document.getElementById('logo');

    // Check if the logo element exists to avoid errors
    if (logo) {
        // Add event listener to the logo image
        logo.addEventListener('click', function() {
            // Redirect to homepage
            window.location.href = 'index.html';
        });
    }
});