document.addEventListener('DOMContentLoaded', function() {
    // Load header from root directory
    fetch('/header.html') // <-- Correct path (root directory)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header.html:', error));

    // Load footer from root directory
    fetch('/footer.html') // <-- Correct path (root directory)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load footer');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer.html:', error));
});
