document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav'),
          openBtn = document.querySelector('.burger-menu'),
          underNav = document.querySelector('.under-nav'),
          openUnderBtn = document.querySelector('nav .apper-nav .container .person-btns a:last-child'),
          mobileBtn = document.querySelector('.open-mobile-menu'),
          mobileMenu = document.querySelector('.mobile-menu__open'),
          closeMobileMenu = document.querySelector('.mobile-menu__open .mobile-menu__buttons .close');
          searchBtn = document.querySelector('.mobile-menu__open .mobile-menu__buttons button.search');
          search = document.querySelector('.mobile-menu__search'),
          closeSearch = document.querySelector('.mobile-menu__search .close');

    let flag = 0,
        flagOpenUnder = 0;

    openBtn.addEventListener('click', () => {
        navbar.classList.add('show');
        flag = 1;
        console.log(1)
    })

    try {
        openUnderBtn.addEventListener('click', () => {
            if (!flagOpenUnder) {
                underNav.classList.add('show');
                flagOpenUnder = 1;
            }else{
                underNav.classList.remove('show');
                flagOpenUnder = 0;
            }
        })
    } catch {}

    try {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.add('show');
        })
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        })

        searchBtn.addEventListener('click', () => {
            search.classList.add('show');
        })
        closeSearch.addEventListener('click', () => {
            search.classList.remove('show');
        })
    } catch {}

    window.addEventListener('scroll', () => {
        if (getBodyScrollTop() > 100) {
            navbar.classList.add('show');   
            flag = 0;
        }else{
            if (!flag) {
                navbar.classList.remove('show');
            }
        }
    })


    function getBodyScrollTop()
    {
        return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    }
})