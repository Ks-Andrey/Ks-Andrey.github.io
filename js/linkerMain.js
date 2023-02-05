document.addEventListener('DOMContentLoaded', () => {
    function check() {
        if (window.innerWidth <= 991) {
            location.href = 'index-mobile.html';
        }
    }

    window.addEventListener('resize', () => {
        check();
    });

    check();
})