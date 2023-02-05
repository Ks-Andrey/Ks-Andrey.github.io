document.addEventListener('DOMContentLoaded', () => {
    function popap(popapSelector, popapBtnSelector) {
        const popap = document.querySelector(popapSelector),
              popapBtn = document.querySelector(popapBtnSelector),
              popapClose = popap.querySelector('.close'),
              dopClose = popap.querySelector('.close-popap'),
              bg = document.querySelector('.bg');

        popapBtn.addEventListener('click', () => {
            popap.classList.remove('hidden');
            bg.classList.remove('hidden');
        })
        popapClose.addEventListener('click', () => {
            popap.classList.add('hidden');
            bg.classList.add('hidden');
        })
        bg.addEventListener('click', () => {
            popap.classList.add('hidden');
            bg.classList.add('hidden');
        })
        if (dopClose) {
            dopClose.addEventListener('click', () => {
                popap.classList.add('hidden');
                bg.classList.add('hidden');
            }) 
        }
    }

    popap('.review-accept', '.form-group__buttons .add-comment');
    popap('.sign-in__popap', '.form-group form button.sing-in');
})