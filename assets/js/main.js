// /assets/js/main.js

// Function to load the header content dynamically
fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(err => console.error("Error loading header: ", err));