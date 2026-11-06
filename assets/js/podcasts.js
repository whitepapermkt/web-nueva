/* Whitepaper · Podcasts · filtros del catálogo (formato × acceso × idioma) */
(function () {
  "use strict";
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var state = { fmt: "all", access: "all", lang: "all" };
  var shows = $$(".pshow"), groups = $$(".pgroup"), count = document.getElementById("pCount"), empty = document.querySelector(".pempty");

  function apply() {
    var n = 0;
    shows.forEach(function (s) {
      var ok = ["fmt", "access", "lang"].every(function (k) { return state[k] === "all" || s.getAttribute("data-" + k) === state[k]; });
      s.hidden = !ok; if (ok) n++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector(".pshow:not([hidden])"); });
    if (count) count.textContent = n;
    if (empty) empty.hidden = n !== 0;
    var q = new URLSearchParams();
    Object.keys(state).forEach(function (k) { if (state[k] !== "all") q.set(k, state[k]); });
    history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : "") + location.hash);
  }
  function set(key, val) {
    state[key] = val;
    $$('.chip[data-filter="' + key + '"]').forEach(function (c) {
      var on = c.getAttribute("data-value") === val;
      c.classList.toggle("is-on", on); c.setAttribute("aria-pressed", on ? "true" : "false");
    });
    apply();
  }
  $$(".chip[data-filter]").forEach(function (c) {
    c.addEventListener("click", function () { set(c.getAttribute("data-filter"), c.getAttribute("data-value")); });
  });
  var reset = document.getElementById("pReset");
  if (reset) reset.addEventListener("click", function () { ["fmt", "access", "lang"].forEach(function (k) { set(k, "all"); }); });

  /* Filtros desde la URL: podcasts.html?fmt=series&access=sub */
  var p = new URLSearchParams(location.search);
  ["fmt", "access", "lang"].forEach(function (k) { if (p.get(k)) set(k, p.get(k)); });
})();
