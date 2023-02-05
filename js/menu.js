document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav'),
          openBtn = document.querySelector('.burger-menu'),
          underNav = document.querySelector('.under-nav'),
          openUnderBtn = document.querySelectorAll('nav .apper-nav .container .menu-container a'),
          mobileBtn = document.querySelector('.open-mobile-menu'),
          mobileMenu = document.querySelector('.mobile-menu__open'),
          closeMobileMenu = document.querySelector('.mobile-menu__open .mobile-menu__buttons .close'),
          searchBtn = document.querySelector('.mobile-menu__open .mobile-menu__buttons button.search'),
          search = document.querySelector('.mobile-menu__search'),
          closeSearch = document.querySelector('.mobile-menu__search .close'),
          searchDesctopBtn = document.querySelector('.open-search__desctop'),
          searchDesctop = document.querySelector('nav .desctop-menu__search');

    let flag = 0;

    try {
        openBtn.addEventListener('click', () => {
            navbar.classList.add('show');
            flag = 1;
        })
    } catch {}

    try {
        openUnderBtn.forEach(item => {
            item.addEventListener('click', () => {
                underNav.classList.add('show');
                searchDesctop.classList.remove('show');
            })
        })
        underNav.addEventListener('mouseleave', () => {
            underNav.classList.remove('show');
        })


        searchDesctopBtn.addEventListener('click', () => {
            searchDesctop.classList.add('show');
            underNav.classList.remove('show');
        })
        searchDesctop.addEventListener('mouseleave', () => {
            searchDesctop.classList.remove('show');
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

    if (openBtn) {
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
    }


    function getBodyScrollTop()
    {
        return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    }
})