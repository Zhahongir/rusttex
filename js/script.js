// Header 
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.header__wrap__content__phone__select');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.header__wrap__content__phone__select__btn');
			const content = self.querySelector('.header__wrap__content__phone__select__addition');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});


// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuClose = document.querySelectorAll('.menu__inner__close'),
    menuItem = document.querySelectorAll('.menu__inner__wrap__list__item__link'),
    hamburger = document.querySelector('.header__wrap__content__hamburger'),
    bgMenu = document.querySelector('.bg-menu');
    bodyBack = document.getElementById('htmlOveflow');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        bgMenu.classList.toggle('bg-menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            bgMenu.classList.toggle('bg-menu-active');
        });
    });
  
    menuClose.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            bgMenu.classList.toggle('bg-menu-active');
        });
    });
});


// Header fixed
const hideNav = () => {
    const hiddenNavClassName = 'navigation__hidden';
    const fixedNavClassName = 'navigation__fixed';
    const headerHeight = 100;
    const navHeight = 600;
    let initialYvalue = window.scrollY;
    let body = document.querySelector('body');

    let isItHidden = false;
    let isItFixed = false;

    window.addEventListener('scroll', (ev) => {
        const scrollY = window.scrollY;
        if (scrollY > headerHeight) {
            makeItFixed();

            if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
                hide();
            } else {
                show();
            }
        } else {
            makeItNotFixed();
        }

        initialYvalue = scrollY;
    });

    function hide() {
        if (!isItHidden) {
            body.classList.add(hiddenNavClassName);
            isItHidden = true;
        }
    }

    function show() {
        if (isItHidden) {
            body.classList.remove(hiddenNavClassName);
            isItHidden = false;
        }
    }

    function makeItFixed() {
        if (!isItFixed) {
            body.classList.add(fixedNavClassName);
            isItFixed = true;
        }
    }

    function makeItNotFixed() {
        if (isItFixed) {
            body.classList.remove(fixedNavClassName);
            isItFixed = false;
        }
    }
}

hideNav()


// Form
$(document).ready(function() { 

    $('[data-modal=booking]').on('click', function() {
        $('#callback').fadeIn();
    });
    $('.callback__wrap__close').on('click', function() {
        $('#callback').fadeOut();
    });
  });