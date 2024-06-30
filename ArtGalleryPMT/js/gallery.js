document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    images.forEach((image, index) => {
        const img = image.querySelector('img');
        const overlay = image.querySelector('.overlay');
        const caption = image.querySelector('h2');
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
            lightboxImg.dataset.index = index;
            caption.style.opacity = '1';
        });

        overlay.addEventListener('mouseenter', function() {
            caption.style.opacity = '1';
            overlay.style.opacity = '0.9';
        });

        overlay.addEventListener('mouseleave', function() {
            caption.style.opacity = '0';
            overlay.style.opacity = '0';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            lightbox.classList.remove('active');
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
