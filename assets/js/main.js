/* Digi8 — shared front-end behaviour */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Friendly form handling (no backend yet)
  var forms = document.querySelectorAll("form[data-demo-form]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Thank you — your message has been noted. Our team will reach out at connect@digi8.tech shortly.";
        note.style.color = "#047857";
      }
      form.reset();
    });
  });
})();
