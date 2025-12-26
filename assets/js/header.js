// /assets/js/header.js

// Function to load the header content dynamically
fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-text').innerHTML = data;
    })
    .catch(err => console.error("Error loading header: ", err));