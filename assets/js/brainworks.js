"use strict";

(function(w, d, $, ajax) {
    $(function() {
        console.info("The site developed by BRAIN WORKS digital agency");
        console.info("Сайт разработан маркетинговым агентством BRAIN WORKS");
        var w = $(w);
        var d = $(d);
        var html = $("html");
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            html.addClass("is-mobile");
        }
        html.removeClass("no-js").addClass("js");
        sidebarAccordion();
        reviews(".js-reviews");
        scrollTop(".js-scroll-top");
        wrapHighlightedElements(".highlighted");
        if (ajax) {
            ajaxLoadMorePosts(".js-load-more", ".js-ajax-posts");
        }
        scrollHandlerForButton(".nav a");
        stickFooter(".js-footer", ".js-container");
        anotherHamburgerMenu(".js-menu", ".js-hamburger", ".js-menu-close");
        buyOneClick(".one-click", '[data-field-id="field7"]', "h1.page-name");
        handleForm(".default-form");
        setPointer("#pointer");
        d.on("copy", addLink);
        w.on("resize", function() {
            if (w.innerWidth >= 630) {
                removeAllStyles($(".js-menu"));
            }
        });
        var sliderButtons = $(".products-pagination-button");
        $(".products-slider").on("init", function(slick) {
            var target = $(slick.currentTarget);
            sliderButtons.each(function(index, element) {
                $(element).on("click", function(e) {
                    target.slick("slickGoTo", index);
                });
            }).eq(0).addClass("_active");
        }).slick({
            slidesToShow: 1,
            prevArrow: $(".products-slider-arrow._left"),
            nextArrow: $(".products-slider-arrow._right")
        }).on("afterChange", function(slick, currentSlide) {
            sliderButtons.removeClass("_active").eq(currentSlide.currentSlide).addClass("_active");
        });
    });
    var stickFooter = function stickFooter(footer, container) {
        var el = $(footer);
        var height = el.outerHeight() + 20 + "px";
        $(container).css("paddingBottom", height);
    };
    var reviews = function reviews(container) {
        var element = $(container);
        if (element.children().length > 1 && typeof $.fn.slick === "function") {
            element.slick({
                adaptiveHeight: false,
                autoplay: false,
                autoplaySpeed: 3e3,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
                dots: true,
                dotsClass: "slick-dots",
                draggable: true,
                fade: false,
                infinite: true,
                responsive: [ {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                } ],
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                swipe: true,
                zIndex: 10
            });
        }
    };
    var scrollHandlerForButton = function scrollHandlerForButton(elements) {
        elements = $(elements);
        if (elements.length) {
            elements.each(function(index, element) {
                var attr = element.getAttribute("href");
                if (attr && (attr[0] === "#" || attr[1] === "#")) {
                    if (attr[0] === "/") attr = attr.slice(1);
                    console.log(attr);
                    element.addEventListener("click", function(e) {
                        e.preventDefault();
                        var el = $(attr);
                        if (el.length) $("html, body").animate({
                            scrollTop: el.offset().top
                        }, 500);
                    });
                }
            });
        }
    };
    var anotherHamburgerMenu = function anotherHamburgerMenu(menuElement, hamburgerElement, closeTrigger) {
        var Elements = {
            menu: $(menuElement),
            button: $(hamburgerElement),
            close: $(closeTrigger)
        };
        Elements.button.add(Elements.close).on("click", function() {
            Elements.menu.toggleClass("is-active");
        });
        Elements.menu.find("a").on("click", function() {
            Elements.menu.removeClass("is-active");
        });
        var arrowOpener = function arrowOpener(parent) {
            var activeArrowClass = "menu-item-has-children-arrow-active";
            return $("<button />").addClass("menu-item-has-children-arrow").on("click", function() {
                parent.children(".sub-menu").eq(0).slideToggle(300);
                if ($(this).hasClass(activeArrowClass)) {
                    $(this).removeClass(activeArrowClass);
                } else {
                    $(this).addClass(activeArrowClass);
                }
            });
        };
        var items = Elements.menu.find(".menu-item-has-children, .sub-menu-item-has-children");
        for (var i = 0; i < items.length; i++) {
            items.eq(i).append(arrowOpener(items.eq(i)));
        }
    };
    var removeAllStyles = function removeAllStyles(elementParent) {
        elementParent.find(".sub-menu").removeAttr("style");
    };
    var wrapHighlightedElements = function wrapHighlightedElements(elements) {
        elements = $(elements);
        var i, highlightedHeader;
        for (i = 0; i < elements.length; i++) {
            highlightedHeader = elements.eq(i);
            highlightedHeader.wrap('<div style="display: block;"></div>');
        }
    };
    var buyOneClick = function buyOneClick(button, field, headline) {
        var btn = $(button);
        if (btn.length) {
            btn.on("click", function() {
                $(field).prop("disabled", true).val($(headline).text());
            });
        }
    };
    var scrollTop = function scrollTop(element) {
        var el = $(element);
        el.on("click touchend", function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        var scrollPosition;
        $(window).on("scroll", function() {
            scrollPosition = $(this).scrollTop();
            if (scrollPosition > 200) {
                if (!el.hasClass("is-visible")) {
                    el.addClass("is-visible");
                }
            } else {
                el.removeClass("is-visible");
            }
        });
    };
    var addLink = function addLink() {
        var body = document.body || document.getElementsByTagName("body")[0];
        var selection = window.getSelection();
        var page_link = "\n Источник: " + document.location.href;
        var copy_text = selection + page_link;
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = "-9999px";
        body.appendChild(div);
        div.innerText = copy_text;
        selection.selectAllChildren(div);
        window.setTimeout(function() {
            body.removeChild(div);
        }, 0);
    };
    var scrollToElement = function scrollToElement() {
        var animationSpeed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;
        var links = $("a");
        links.each(function(index, element) {
            var $element = $(element), href = $element.attr("href");
            $element.on("click", function(e) {
                e.preventDefault();
                var el = $(href);
                if (el.length) {
                    $("html, body").animate({
                        scrollTop: $(href).offset().top
                    }, animationSpeed);
                }
            });
        });
    };
    var sidebarAccordion = function sidebarAccordion() {
        var sidebarMenu = $(".sidebar .widget_nav_menu");
        var items = sidebarMenu.find("li");
        var subMenu = items.find(".sub-menu");
        if (subMenu.length) {
            subMenu.each(function(index, value) {
                $(value).parent().first().append('<i class="trigger"></i>');
            });
        }
        var classAction = "is-opened";
        var trigger = items.find(".trigger");
        trigger.on("click", function() {
            var el = $(this), parent = el.parent();
            if (parent.hasClass(classAction)) {
                parent.removeClass(classAction);
            } else {
                parent.addClass(classAction);
            }
        });
    };
    var ajaxLoadMorePosts = function ajaxLoadMorePosts(selector, container) {
        var btn = $(selector);
        var storage = $(container);
        if (!btn.length && !storage.length) return;
        var data, ajaxStart;
        data = {
            action: ajax.action,
            nonce: ajax.nonce,
            paged: 1
        };
        btn.on("click", function() {
            if (ajaxStart) return;
            ajaxStart = true;
            btn.addClass("is-loading");
            $.ajax({
                url: ajax.url,
                method: "POST",
                dataType: "json",
                data: data
            }).done(function(response) {
                var posts = response.data;
                storage.append(response.data);
                data.paged += 1;
                ajaxStart = false;
                btn.removeClass("is-loading");
                if (posts === "") {
                    btn.remove();
                }
            }).fail(function(jqXHR, textStatus, errorThrown) {
                ajaxStart = false;
                throw new Error("Handling Ajax request loading posts has caused an ".concat(textStatus, " - ").concat(errorThrown));
            });
        });
    };
    var handleForm = function handleForm(selector) {
        $(selector).on("submit", function(e) {
            e.preventDefault();
            var $form = $(e.target), action = $form.attr("action"), method = $form.attr("method") || "POST", fields = $form.find("input"), data = [], error = {
                value: false,
                set: function set(value) {
                    this.value = value;
                }
            };
            fields.each(function(index, element) {
                if (!element.value) {
                    element.classList.add("_error");
                    error.set(true);
                } else {
                    data.push({
                        value: element.value,
                        placeholder: element.placeholder
                    });
                }
            });
            if (!error.value) {
                $form.find("button[type=submit]").attr("disabled");
                $.ajax({
                    url: action,
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify({
                        fields: data
                    }),
                    method: method,
                    cache: false,
                    success: function success(response) {
                        $form.html('<h4 class="header header--white form-default-response">'.concat(response.Data.text, "</h4>"));
                    }
                });
            }
        });
    };
    var setPointer = function setPointer(selector) {
        var pointer = $(selector);
        if (!pointer.length) return;
        $("body").mousemove(function(e) {
            pointer.css({
                left: e.pageX - 10 + "px",
                top: e.pageY + "px"
            });
        });
        $("a, img, button").mouseover(function(e) {
            pointer.css({
                transform: "scale(5)",
                opacity: .5
            });
        }).mouseout(function(e) {
            pointer.css({
                transform: "scale(1)",
                opacity: 1
            });
        });
    };
})(window, document, jQuery, window.jpAjax);