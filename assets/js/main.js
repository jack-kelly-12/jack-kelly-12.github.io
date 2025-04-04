/**
 * LongBall Labs Website
 * Optimized JS - Based on Nova Bootstrap template
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        if (dropDownIndicator) {
          dropDownIndicator.classList.toggle("bi-chevron-up");
          dropDownIndicator.classList.toggle("bi-chevron-down");
        }
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /**
   * Check and initialize optional libraries if they exist
   */
  // Initialize GLightbox if available
  if (typeof GLightbox !== "undefined") {
    const glightbox = GLightbox({
      selector: ".glightbox",
    });
  }

  // Initialize Swiper if available
  if (typeof Swiper !== "undefined") {
    // Slides-1 initialization
    const slides1Elements = document.querySelectorAll(".slides-1");
    if (slides1Elements.length > 0) {
      new Swiper(".slides-1", {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }

    // Slides-3 initialization
    const slides3Elements = document.querySelectorAll(".slides-3");
    if (slides3Elements.length > 0) {
      new Swiper(".slides-3", {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      });
    }
  }

  /**
   * Portfolio isotope and filter (if Isotope is available)
   */
  if (typeof Isotope !== "undefined") {
    let portfolioIsotope = document.querySelector(".portfolio-isotope");
    if (portfolioIsotope) {
      let portfolioFilter = portfolioIsotope.getAttribute(
        "data-portfolio-filter"
      )
        ? portfolioIsotope.getAttribute("data-portfolio-filter")
        : "*";
      let portfolioLayout = portfolioIsotope.getAttribute(
        "data-portfolio-layout"
      )
        ? portfolioIsotope.getAttribute("data-portfolio-layout")
        : "masonry";
      let portfolioSort = portfolioIsotope.getAttribute("data-portfolio-sort")
        ? portfolioIsotope.getAttribute("data-portfolio-sort")
        : "original-order";

      window.addEventListener("load", () => {
        let portfolioContainer = document.querySelector(".portfolio-container");
        if (portfolioContainer) {
          let isotope = new Isotope(portfolioContainer, {
            itemSelector: ".portfolio-item",
            layoutMode: portfolioLayout,
            filter: portfolioFilter,
            sortBy: portfolioSort,
          });

          let menuFilters = document.querySelectorAll(
            ".portfolio-isotope .portfolio-flters li"
          );
          menuFilters.forEach(function (el) {
            el.addEventListener(
              "click",
              function () {
                document
                  .querySelector(
                    ".portfolio-isotope .portfolio-flters .filter-active"
                  )
                  .classList.remove("filter-active");
                this.classList.add("filter-active");
                isotope.arrange({
                  filter: this.getAttribute("data-filter"),
                });
                if (typeof aos_init === "function") {
                  aos_init();
                }
              },
              false
            );
          });
        }
      });
    }
  }

  /**
   * Animation on scroll function and init (if AOS is available)
   */
  if (typeof AOS !== "undefined") {
    function aos_init() {
      AOS.init({
        duration: 800,
        easing: "slide",
        once: true,
        mirror: false,
      });
    }
    window.addEventListener("load", () => {
      aos_init();
    });
  }
});
