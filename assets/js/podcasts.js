/* Whitepaper · Podcasts
   Eliges un programa y debajo aparecen todos sus episodios (búsqueda, temporadas y "mostrar más").
   Datos: assets/data/podcasts-data.js (window.WP_PODCASTS). */
(function () {
  "use strict";
  var DATA = window.WP_PODCASTS || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var PAGE = 25;
  var ART = { "whitepaper-10": "assets/img/show-w10.jpg", "arquitectura": "assets/img/show-w10.jpg", "mexmoves": "assets/img/show-mexmoves.jpg" };
  var LOCK = '<svg class="lock"><use href="#lock"/></svg>';
  window.WP_EP = window.WP_EP || {};

  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function norm(t) { return String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function fdate(d) { var p = d.split("-"); return p[2] + "." + p[1] + "." + p[0].slice(2); }
  function fdur(m) { if (!m) return ""; return m >= 60 ? Math.floor(m / 60) + " h " + (m % 60) + " min" : m + " min"; }

  /* Registra los episodios con audio público para el reproductor */
  Object.keys(DATA).forEach(function (show) {
    var name = ($('.ppanel[data-show="' + show + '"]') || { getAttribute: function () { return show; } }).getAttribute("data-name");
    DATA[show].forEach(function (e, i) {
      e.id = show + "-" + i;
      if (e.a) window.WP_EP[e.id] = { title: e.t, show: name, art: ART[show] || "assets/img/logo.png", src: e.a };
    });
  });

  function row(e, isEn) {
    var l = isEn ? ' lang="en"' : "";
    var btn = e.a
      ? '<button class="ep__play" type="button" data-play="' + e.id + '" aria-label="Escuchar: ' + esc(e.t) + '"><span class="tri" aria-hidden="true">▶</span></button>'
      : '<a class="ep__play ep__play--link" href="' + esc(e.u) + '" aria-label="Escuchar en whitepaper.mx: ' + esc(e.t) + '"><span class="tri" aria-hidden="true">▶</span></a>';
    var title = e.u ? '<a href="' + esc(e.u) + '">' + esc(e.t) + "</a>" : esc(e.t);
    var acc = e.o ? '<span class="tag tag--open">Abierto</span>' : '<span class="tag">' + LOCK + "Suscriptores</span>";
    var season = e.s ? '<span class="ep__season">' + esc(e.s) + "</span>" : "";
    return '<li class="ep"' + (e.a ? ' data-ep="' + e.id + '"' : "") + l + ">" + btn +
      '<div class="ep__body">' + season + '<p class="ep__title">' + title + '</p><p class="ep__meta"><span>' + fdate(e.d) + "</span><span>" + fdur(e.m) + "</span>" + acc + "</p></div></li>";
  }

  var state = {}; /* por programa: { q, season, shown } */

  function render(show) {
    var panel = $('.ppanel[data-show="' + show + '"]'); if (!panel) return;
    var st = state[show] || (state[show] = { q: "", season: "all", shown: PAGE });
    var all = DATA[show] || [];
    var q = norm(st.q);
    var list = all.filter(function (e) {
      return (st.season === "all" || e.s === st.season) && (!q || norm(e.t + " " + (e.s || "")).indexOf(q) !== -1);
    });
    var isEn = show === "mexmoves";
    $("[data-list]", panel).innerHTML = list.slice(0, st.shown).map(function (e) { return row(e, isEn); }).join("");
    var more = $("[data-more]", panel);
    more.parentNode.hidden = list.length <= st.shown;
    more.textContent = "Mostrar más episodios (" + (list.length - st.shown) + ")";
    $(".ppanel__count", panel).textContent = list.length === all.length
      ? all.length.toLocaleString("es-MX") + " episodios"
      : list.length.toLocaleString("es-MX") + " de " + all.length.toLocaleString("es-MX") + " episodios";
    if (!list.length) $("[data-list]", panel).innerHTML = '<li class="ep ep--empty">No encontramos episodios con esa búsqueda.</li>';
    /* Botón "el más reciente" */
    var latest = all[0], slot = $(".ppanel__latest", panel);
    if (latest && slot && !slot.firstChild) {
      slot.innerHTML = latest.a
        ? '<button class="btn" type="button" data-play="' + latest.id + '"><span class="tri" aria-hidden="true">▶</span> <span class="lbl">' + (isEn ? "Listen" : "Escuchar") + "</span></button>"
        : '<a class="btn" href="' + esc(latest.u) + '"><span class="tri" aria-hidden="true">▶</span> Escuchar el más reciente</a>';
    }
    if (window.WP_SYNC) window.WP_SYNC();
  }

  function pick(show, scroll) {
    if (!DATA[show]) show = "whitepaper-10";
    $$(".ptile").forEach(function (t) { var on = t.getAttribute("data-pick") === show; t.classList.toggle("is-on", on); t.setAttribute("aria-pressed", on ? "true" : "false"); });
    $$(".ppanel").forEach(function (p) { p.hidden = p.getAttribute("data-show") !== show; });
    $(".ptiles").classList.add("has-pick");
    render(show);
    var u = new URL(location.href); u.searchParams.set("show", show); history.replaceState(null, "", u.pathname + u.search + u.hash);
    if (scroll) { var p = $("#p-" + show); if (p) p.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }

  $$(".ptile").forEach(function (t) { t.addEventListener("click", function () { pick(t.getAttribute("data-pick"), true); }); });

  $$(".ppanel").forEach(function (panel) {
    var show = panel.getAttribute("data-show");
    var input = $("[data-search]", panel), timer;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { var st = state[show]; st.q = input.value; st.shown = PAGE; render(show); }, 120);
    });
    $("[data-more]", panel).addEventListener("click", function () { state[show].shown += PAGE; render(show); });
    $$("[data-season]", panel).forEach(function (c) {
      c.addEventListener("click", function () {
        state[show].season = c.getAttribute("data-season"); state[show].shown = PAGE;
        $$("[data-season]", panel).forEach(function (x) { var on = x === c; x.classList.toggle("is-on", on); x.setAttribute("aria-pressed", on ? "true" : "false"); });
        render(show);
      });
    });
  });

  pick(new URLSearchParams(location.search).get("show") || "whitepaper-10", false);
})();
