"use strict";

((w, d, $, ajax) => {
  $(() => {
    console.info("The site developed by BRAIN WORKS digital agency");
    console.info("Сайт разработан маркетинговым агентством BRAIN WORKS");

    const w = $(w);
    const d = $(d);
    const html = $("html");
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      html.addClass("is-mobile");
    }

    html.removeClass("no-js").addClass("js");

    // scrollToElement();
    sidebarAccordion();
    reviews(".js-reviews");
    scrollTop(".js-scroll-top");
    wrapHighlightedElements(".highlighted");
    if (ajax) {
      ajaxLoadMorePosts(".js-load-more", ".js-ajax-posts");
    }
    scrollHandlerForButton(".nav a");
    stickFooter(".js-footer", ".js-container");
    // hamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
    anotherHamburgerMenu(".js-menu", ".js-hamburger", ".js-menu-close");
    buyOneClick(".one-click", '[data-field-id="field7"]', "h1.page-name");
    handleForm(".default-form");
    setPointer("#pointer");
    // On Copy
    d.on("copy", addLink);

    w.on("resize", () => {
      if (w.innerWidth >= 630) {
        removeAllStyles($(".js-menu"));
      }
    });

    const sliderButtons = $(".products-pagination-button");

    $(".products-slider")
      .on("init", slick => {
        const target = $(slick.currentTarget);
        sliderButtons
          .each((index, element) => {
            $(element).on("click", e => {
              target.slick("slickGoTo", index);
            });
          })
          .eq(0)
          .addClass("_active");
      })
      .slick({
        slidesToShow: 1,
        prevArrow: $(".products-slider-arrow._left"),
        nextArrow: $(".products-slider-arrow._right")
      })

      .on("afterChange", (slick, currentSlide) => {
        sliderButtons
          .removeClass("_active")
          .eq(currentSlide.currentSlide)
          .addClass("_active");
      });
  });

  /**
   * Stick Footer
   *
   * @example
   * stickFooter('.js-footer', '.js-wrapper');
   *
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   *
   * @param {(string|Object)} footer - footer element
   * @param {(string|Object)} container - container element
   * @returns {void}
   */
  const stickFooter = (footer, container) => {
    const el = $(footer);
    const height = el.outerHeight() + 20 + "px";

    $(container).css("paddingBottom", height);
  };

  /**
   * Reviews - Slick Slider
   *
   * @example
   * reviews('.js-reviews');
   *
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   *
   * @param {(string|Object)} container - reviews container
   * @returns {void}
   */
  const reviews = container => {
    const element = $(container);

    if (element.children().length > 1 && typeof $.fn.slick === "function") {
      element.slick({
        adaptiveHeight: false,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        dots: true,
        dotsClass: "slick-dots",
        draggable: true,
        fade: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ],
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        swipe: true,
        zIndex: 10
      });

      /*element.on('swipe', (slick, direction) => {
                console.log(slick, direction);
            });

            element.on('afterChange', (slick, currentSlide) => {
                console.log(slick, currentSlide);
            });

            element.on('beforeChange', (slick, currentSlide, nextSlide) => {
                console.log(slick, currentSlide, nextSlide);
            });*/
    }
  };

  /**
   * Hamburger Menu
   *
   * @example
   * hamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
   *
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   *
   * @param {(string|Object)} menuElement - Selected menu
   * @param {(string|Object)} hamburgerElement - Trigger element for open/close menu
   * @param {(string|Object)} closeTrigger - Trigger element for close opened menu
   * @returns {void}
   */
  /*const hamburgerMenu = (menuElement, hamburgerElement, closeTrigger) => {
        const menu = $(menuElement),
            close = $(closeTrigger),
            hamburger = $(hamburgerElement),
            menuAll = hamburger.add(menu);

        hamburger.add(close).on('click', () => {
            menu.toggleClass('is-active');
        });

        $(window).on('load', (event) => {
            if (document.location.hash !== '') {
                scrollToElement(document.location.hash);
            }
        });

        $(window).on('click', (e) => {
            if (!$(e.target).closest(menuAll).length) {
                menu.removeClass('is-active');
            }
        });
    };*/

  /**
   * Scroll to element
   *
   * @param {(string|Object)} elements Elements to add to handler
   * @returns {void}
   */
  const scrollHandlerForButton = elements => {
    elements = $(elements);
    if (elements.length) {
      elements.each((index, element) => {
        let attr = element.getAttribute("href");
        if (attr && (attr[0] === "#" || attr[1] === "#")) {
          if (attr[0] === "/") attr = attr.slice(1);
          console.log(attr);
          element.addEventListener("click", e => {
            e.preventDefault();
            let el = $(attr);
            if (el.length)
              $("html, body").animate(
                {
                  scrollTop: el.offset().top
                },
                500
              );
          });
        }
      });
    }

    // let i, el;

    // for (i = 0; i < elements.length; i++) {

    //     el = elements.eq(i);

    //     el.on('click', (e) => {
    //         e.preventDefault();
    //         e.stopPropagation();

    //         scrollToElement($(e.target.hash), () => {
    //             document.location.hash = e.target.hash;
    //         });
    //     });

    // }
  };

  /**
   * Another Hamburger Menu
   *
   * @param {string} menuElement Selector or element
   * @param {string} hamburgerElement Selector or element
   * @param {string} closeTrigger Also selector or element
   * @returns {void}
   */
  const anotherHamburgerMenu = (
    menuElement,
    hamburgerElement,
    closeTrigger
  ) => {
    const Elements = {
      menu: $(menuElement),
      button: $(hamburgerElement),
      close: $(closeTrigger)
    };

    Elements.button.add(Elements.close).on("click", () => {
      Elements.menu.toggleClass("is-active");
    });

    Elements.menu.find("a").on("click", () => {
      Elements.menu.removeClass("is-active");
    });

    /**
     * Arrow Opener
     *
     * @param {Object} parent Selector or element
     * @returns {(Object)} jQuery element
     */
    const arrowOpener = function(parent) {
      const activeArrowClass = "menu-item-has-children-arrow-active";

      return $("<button />")
        .addClass("menu-item-has-children-arrow")
        .on("click", function() {
          parent
            .children(".sub-menu")
            .eq(0)
            .slideToggle(300);
          if ($(this).hasClass(activeArrowClass)) {
            $(this).removeClass(activeArrowClass);
          } else {
            $(this).addClass(activeArrowClass);
          }
        });
    };

    const items = Elements.menu.find(
      ".menu-item-has-children, .sub-menu-item-has-children"
    );

    for (let i = 0; i < items.length; i++) {
      items.eq(i).append(arrowOpener(items.eq(i)));
    }
  };

  /**
   * Remove All Styles from sub menu element
   *
   * @param {Object} elementParent selector or element
   * @returns {void}
   */
  const removeAllStyles = elementParent => {
    elementParent.find(".sub-menu").removeAttr("style");
  };

  /**
   * Wrap all highlighted elements in container
   *
   * @param {(string|Object)} elements selector or elements
   * @returns {void}
   */
  const wrapHighlightedElements = elements => {
    elements = $(elements);

    let i, highlightedHeader;

    for (i = 0; i < elements.length; i++) {
      highlightedHeader = elements.eq(i);

      highlightedHeader.wrap('<div style="display: block;"></div>');
    }
  };

  /**
   * Buy in one click
   *
   * @example
   * buyOneClick('.one-click', '[data-field-id="field7"]', 'h1.page-name');
   *
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   *
   * @param {(string|Object)} button - The selected button when clicking on which the form of purchase pops up
   * @param {(string|Object)} field - The selected field for writing the value (disabled field)
   * @param {(string|Object)} headline - The element from which we get the value to write to the field
   * @returns {void}
   */
  const buyOneClick = (button, field, headline) => {
    const btn = $(button);

    if (btn.length) {
      btn.on("click", () => {
        $(field)
          .prop("disabled", true)
          .val($(headline).text());
      });
    }
  };

  /**
   * Scroll Top
   *
   * @example
   * scrollTop('.js-scroll-top');
   *
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   *
   * @param {(string|Object)} element - Selected element
   * @returns {void}
   */
  const scrollTop = element => {
    const el = $(element);

    el.on("click touchend", () => {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    let scrollPosition;

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

  /**
   * Adding link to the site resource at copying
   *
   * @example
   * document.oncopy = addLink; or $(document).on('copy', addLink);
   *
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   *
   * @returns {void}
   */
  const addLink = () => {
    const body = document.body || document.getElementsByTagName("body")[0];
    const selection = window.getSelection();
    const page_link = "\n Источник: " + document.location.href;
    const copy_text = selection + page_link;
    const div = document.createElement("div");

    div.style.position = "absolute";
    div.style.left = "-9999px";

    body.appendChild(div);
    div.innerText = copy_text;

    selection.selectAllChildren(div);

    window.setTimeout(() => {
      body.removeChild(div);
    }, 0);
  };

  /**
   * Function to add scroll handler for all links with hash as first symbol of href
   *
   * @param {number} [animationSpeed=400] speed of animation
   * @returns {void}
   */
  const scrollToElement = (animationSpeed = 400) => {
    const links = $("a");

    links.each((index, element) => {
      const $element = $(element),
        href = $element.attr("href");

      // if (href[0] === '#') {
      $element.on("click", e => {
        e.preventDefault();

        const el = $(href);

        if (el.length) {
          $("html, body").animate(
            {
              scrollTop: $(href).offset().top
            },
            animationSpeed
          );
        }
      });
      // }
    });
  };

  /**
   * Sidebar Accordion
   *
   * @example
   * sidebarAccordion();
   *
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   *
   * @returns {void}
   */
  const sidebarAccordion = () => {
    const sidebarMenu = $(".sidebar .widget_nav_menu");
    const items = sidebarMenu.find("li");
    const subMenu = items.find(".sub-menu");

    if (subMenu.length) {
      subMenu.each(function(index, value) {
        $(value)
          .parent()
          .first()
          .append('<i class="trigger"></i>');
      });
    }

    const classAction = "is-opened";
    const trigger = items.find(".trigger");

    trigger.on("click", function() {
      const el = $(this),
        parent = el.parent();

      if (parent.hasClass(classAction)) {
        parent.removeClass(classAction);
      } else {
        parent.addClass(classAction);
      }
    });
  };

  /**
   * Ajax Load More Posts Handler
   *
   * @example
   * ajaxLoadMorePosts('.js-load-more', '.js-ajax-posts');
   * @author Fedor Kudinov <brothersrabbits@mail.ru>
   * @param {string} selector - Element for event handler (send ajax)
   * @param {string} container - The container to which the html markup will be added
   * @returns {void}
   */
  const ajaxLoadMorePosts = (selector, container) => {
    const btn = $(selector);
    const storage = $(container);

    if (!btn.length && !storage.length) return;

    let data, ajaxStart;

    data = {
      action: ajax.action,
      nonce: ajax.nonce,
      paged: 1
    };

    btn.on("click", () => {
      if (ajaxStart) return;

      ajaxStart = true;

      btn.addClass("is-loading");

      $.ajax({
        url: ajax.url,
        method: "POST",
        dataType: "json",
        data: data
      })
        .done(response => {
          const posts = response.data;
          storage.append(response.data);

          data.paged += 1;

          ajaxStart = false;

          btn.removeClass("is-loading");

          if (posts === "") {
            btn.remove();
          }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          ajaxStart = false;
          throw new Error(
            `Handling Ajax request loading posts has caused an ${textStatus} - ${errorThrown}`
          );
        });
    });
  };

  const handleForm = selector => {
    $(selector).on("submit", e => {
      e.preventDefault();
      const $form = $(e.target),
        action = $form.attr("action"),
        method = $form.attr("method") || "POST",
        fields = $form.find("input"),
        data = [],
        error = {
          value: false,
          set(value) {
            this.value = value;
          }
        };

      fields.each((index, element) => {
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
          data: JSON.stringify({ fields: data }),
          method,
          cache: false,
          success: response => {
            $form.html(
              `<h4 class="header header--white form-default-response">${
                response.Data.text
              }</h4>`
            );
          }
        });
      }
    });
  };

  const setPointer = selector => {
    const pointer = $(selector);
    if (!pointer.length) return;

    $("body").mousemove(e => {
      pointer.css({
        left: e.pageX - 10 + "px",
        top: e.pageY + "px"
      });
    });

    $("a, img, button")
      .mouseover(e => {
        pointer.css({
          transform: "scale(5)",
          opacity: 0.5
        });
      })
      .mouseout(e => {
        pointer.css({
          transform: "scale(1)",
          opacity: 1
        });
      });
  };
})(window, document, jQuery, window.jpAjax);
