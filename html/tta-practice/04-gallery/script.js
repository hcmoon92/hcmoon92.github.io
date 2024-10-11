// Select DOM Elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Function to Open Modal
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.getAttribute('data-full');
        captionText.textContent = item.alt;
    });
});

// Function to Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close Modal When Clicking Outside the Image
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
