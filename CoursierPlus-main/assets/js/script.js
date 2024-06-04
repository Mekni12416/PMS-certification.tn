document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx == index);
            });

            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx == index);
            });
        });
    });
});