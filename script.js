// Load header & footer dynamically
function loadHeaderFooter() {
    fetch('partials/header.html')
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML('afterbegin', data));

    fetch('partials/footer.html')
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML('beforeend', data));
}

// Hamburger menu toggle
function toggleMenu() {
    const navList = document.getElementById("navList");
    navList.classList.toggle("show");
}

// WhatsApp send function for contact page
function sendWhatsAppMessage() {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = "94785369675";

    if(!name || !message) return;

    const autoMessage = `Hello, my name is ${name}.%0A%0A${message}%0A%0A— Sent from CINAMO 369 website`;
    window.open(`https://wa.me/${phone}?text=${autoMessage}`, "_blank");
}

document.addEventListener('DOMContentLoaded', loadHeaderFooter);
