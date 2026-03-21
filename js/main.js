/**
 * PraetorX — main.js
 * Mobile menu toggle + scroll fade-in
 */
(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('header nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Fade-in on scroll
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('visible');
          observer.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.1 });

    var fadeElements = document.querySelectorAll('.fade-in');
    for (var i = 0; i < fadeElements.length; i++) {
      observer.observe(fadeElements[i]);
    }
  } else {
    // Fallback: show everything
    var all = document.querySelectorAll('.fade-in');
    for (var j = 0; j < all.length; j++) {
      all[j].classList.add('visible');
    }
  }
})();
