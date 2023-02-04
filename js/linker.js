document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 991) {
            location.href = 'index-mobile.html';
        }
    });
})