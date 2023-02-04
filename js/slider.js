document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-history .item');

    let slideIndex = 0;

    setInterval(() => {
        if (slideIndex >= slides.length - 1) {
            slideIndex = 0;
        }else{
            slideIndex++;
        }

        slide(slideIndex);
    }, 5000)

    function slide(slideIndex) {
        slides.forEach(item => item.classList.add('hidden'));

        slides[slideIndex].classList.remove('hidden');
    }
})