let currentIndex = 0; // Default: First image visible

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel-wrapper');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    // Update the current index
    currentIndex += direction;

    // Handle wrap-around
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Move the carousel
    const offset = -currentIndex * 100; // 100% width for each slide
    carousel.style.transform = `translateX(${offset}%)`;
}

function maximizeImage(image) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');

    // Set the source of the fullscreen image to the clicked image
    fullscreenImage.src = image.src;

    // Display the fullscreen container
    fullscreenContainer.style.display = 'flex';
}

function closeFullscreen() {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
}
