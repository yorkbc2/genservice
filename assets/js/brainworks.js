(function ($) {
    "use strict";

    $(function () {
        console.info('The site developed by BRAIN WORKS digital agency');
        console.info('Сайт разработан маркетинговым агентством BRAIN WORKS');

        var html = $('html');
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            html.addClass('is-mobile');
        }

        html.removeClass('no-js').addClass('js');

        // Stick Footer
        var footerHeight = $('.footer').outerHeight() + 20;
        $('.page-wrapper').css('padding-bottom', footerHeight + 'px');

        // Scroll Top
        scrollTop('.js-scroll-top');

        // Hamburger Menu
        // hamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
        anotherHamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
        $(window).on("resize", function (e) {
            if (window.innerWidth >= 630) {
                removeAllStyles($(".js-menu"));
            }
        })
        // Buy one click
        buyOneClick('.one-click', '[data-field-id="field7"]', 'h1.page-name');

    });

    /**
     * Hamburger Menu
     *
     * @example
     * hamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     * @param {(string|Object)} menuElement - Selected menu
     * @param {(string|Object)} hamburgerElement - Trigger element for open/close menu
     * @param {(string|Object)} closeTrigger - Trigger element for close opened menu
     */
    function hamburgerMenu(menuElement, hamburgerElement, closeTrigger) {
        var menu = $(menuElement),
            close = $(closeTrigger),
            hamburger = $(hamburgerElement),
            menuAll = hamburger.add(menu);

        hamburger.add(close).on('click', function () {
            menu.toggleClass('is-active');
        });

        $(window).on('load', function (e) {
            if (document.location.hash !== "") {
                scrollToElement(document.location.hash);
            }
        });

        $(window).on('click', function (e) {
            if (!$(e.target).closest(menuAll).length) {
                menu.removeClass('is-active');
            }
        });
    }

    /**
     * Скролл к элементу
     * @param  {string|object} elements Элементы, которым добавляем Handler
     */
    function scrollHandlerForButton (elements) {
        var elements = $(elements);
        for (var i = 0; i < elements.length; i++) {

            var el = elements.eq(i);

            el.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                scrollToElement($(e.target.hash), function () {
                    document.location.hash = e.target.hash;
                });
            });

        }
    }

    /**
     * Скроллим к элементу
     * @param {object|string} element
     */
    function scrollToElement (element, callback) {
        element = $(element);
        $('html, body').animate({
            scrollTop: element.offset().top
        }, 600, function () {
            if (typeof callback === 'function') {
                callback();
            }
        });
    }

    function anotherHamburgerMenu (menuElement, hamburgerElement, closeTrigger) {
        var Elements = {
            menu: $(menuElement),
            button: $(hamburgerElement),
            close: $(closeTrigger)
        }

        Elements.button.add(Elements.close).on('click', function () {
            Elements.menu.toggleClass('is-active');
        })
        var arrowOpener = function (parent) {
            var activeArrowClass = "menu-item-has-children-arrow-active";
            return $("<button />")
                .addClass("menu-item-has-children-arrow")
                .click(function (ev) {
                    parent.children(".sub-menu").eq(0).slideToggle(300)
                    if ($(this).hasClass(activeArrowClass)) $(this).removeClass(activeArrowClass);
                    else $(this).addClass(activeArrowClass);
                })
        }
        var items = Elements.menu.find('.menu-item-has-children, .sub-menu-item-has-children')
        for (var i = 0 ; i < items.length ; i++) {
            items.eq(i).append(arrowOpener(items.eq(i)))
        }
    }

    function removeAllStyles (elementParent) {
        elementParent.find(".sub-menu").removeAttr("style")
    }

    /**
     * Buy in one click
     *
     * @example
     * buyOneClick('.one-click', '[data-field-id="field7"]', 'h1.page-name');
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     * @param {(string|Object)} button - The selected button when clicking on which the form of purchase pops up
     * @param {(string|Object)} field - The selected field for writing the value (disabled field)
     * @param {(string|Object)} headline - The element from which we get the value to write to the field
     */
    function buyOneClick(button, field, headline) {
        var btn = $(button);
        if (btn.length) {
            btn.on('click', function () {
                $(field).prop('disabled', true).val($(headline).text());
            });
        }
    }

    /**
     * Scroll Top
     *
     * @example
     * scrollTop('.js-scroll-top');
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     * @param {(string|Object)} element - Selected element
     */
    function scrollTop(element) {
        var el = $(element);

        el.on('click touchend', function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });

        $(window).on('scroll', function () {
            var scrollPosition = $(this).scrollTop();
            if (scrollPosition > 200) {
                if (!el.hasClass('is-visible')) {
                    el.addClass('is-visible');
                }
            } else {
                el.removeClass('is-visible');
            }
        });
    }

})(jQuery);
