// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Check if the target element exists before scrolling
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Aligns the top of the target element to the top of the viewport
                inline: 'nearest' // Keeps the scroll position in line with the anchor
            });
        }
    });
});

// Alert when a button is clicked, with improved feedback
const contactButton = document.getElementById('contactButton');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        // Using a more user-friendly confirmation method
        alert('Thank you for reaching out! I will get back to you soon.');
        // Optionally, you could add additional actions here, like form submission or UI updates
    });
}
