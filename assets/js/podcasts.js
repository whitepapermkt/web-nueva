/* Whitepaper · Podcasts · filtro por programa y por acceso */
(function () {
  "use strict";
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var state = { show: "all", access: "all" };
  var shows = $$(".pshow"), groups = [], count = document.getElementById("pCount"), empty = document.querySelector(".pempty");

  function apply() {
    var n = 0;
    shows.forEach(function (s) {
      var ok = ["show", "access"].every(function (k) { return state[k] === "all" || s.getAttribute("data-" + k) === state[k]; });
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
    $$('[data-filter="' + key + '"]').forEach(function (c) {
      var on = c.getAttribute("data-value") === val;
      c.classList.toggle("is-on", on); c.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (key === "show") { var t = document.querySelector(".ptiles"); if (t) t.classList.toggle("has-pick", val !== "all"); }
    apply();
  }
  $$("[data-filter]").forEach(function (c) {
    c.addEventListener("click", function () {
      var k = c.getAttribute("data-filter"), v = c.getAttribute("data-value");
      if (k === "show" && v !== "all") set("access", "all");   /* un programa siempre se muestra */
      if (k === "access" && v !== "all") set("show", "all");
      set(k, v);
    });
  });
  var reset = document.getElementById("pReset");
  if (reset) reset.addEventListener("click", function () { ["show", "access"].forEach(function (k) { set(k, "all"); }); });

  /* Filtros desde la URL: podcasts.html?show=mexmoves o ?access=open */
  var p = new URLSearchParams(location.search);
  ["show", "access"].forEach(function (k) { if (p.get(k)) set(k, p.get(k)); });
})();
