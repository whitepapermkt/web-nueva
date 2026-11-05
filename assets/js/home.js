/* Whitepaper · Home · comportamiento mínimo, sin dependencias */
(function () {
  "use strict";

  /* ---------- Episodios con audio público (RSS de Spotify for Creators) ---------- */
  var EPISODES = {
    "w10-205": {
      title: "205. BBVA genera 1 de cada 3 pesos de los bancos en México",
      show: "Whitepaper 10",
      art: "assets/img/show-w10.jpg",
      src: "https://anchor.fm/s/10940ffb0/podcast/play/128726518/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2026-10-4%2F435810828-44100-2-b52908224f85b.mp3"
    },
    "mex-92": {
      title: "92. Bulkmatic on keeping Mexico's factories on track",
      show: "MexMoves",
      art: "assets/img/show-mexmoves.jpg",
      src: "https://anchor.fm/s/10978373c/podcast/play/128369055/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2026-9-29%2F435353187-44100-2-84c69a37d400b.mp3"
    }
  };

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- UTMs en todos los CTAs de suscripción ---------- */
  var params = new URLSearchParams(location.search);
  var inbound = params.get("utm_source");
  $$('a[href*="whitepaper.mx/subscribe"]').forEach(function (a) {
    var url = new URL(a.href);
    var pos = a.getAttribute("data-cta") || "inline";
    url.searchParams.set("utm_source", inbound || "whitepaper.mx");
    url.searchParams.set("utm_medium", "home");
    url.searchParams.set("utm_campaign", "home-2026");
    url.searchParams.set("utm_content", pos);
    a.href = url.toString();
    a.addEventListener("click", function () { track("subscribe_click", { position: pos, plan: currentPlan() }); });
  });

  /* Personalización ligera por origen */
  var ref = document.referrer || "";
  var fromPodcast = inbound === "podcast" || /spotify|podcasts\.apple|youtube/.test(ref);
  if (fromPodcast && $("#kickerSus")) $("#kickerSus").textContent = "Si ya escuchas Whitepaper 10, esto es lo que te falta";

  function track(name, data) {
    if (window.gtag) window.gtag("event", name, data || {});
    if (window.plausible) window.plausible(name, { props: data || {} });
  }

  /* ---------- Barra utilitaria: estado al pasar el masthead ---------- */
  var util = $("#utility");
  var mast = $(".masthead");
  if (util && mast && "IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { util.classList.toggle("is-stuck", !e[0].isIntersecting); }, { rootMargin: "-48px 0px 0px 0px" }).observe(mast);
  }

  /* ---------- Menú móvil ---------- */
  var mnav = $("#mnav"), menuBtn = $("#menuBtn"), menuClose = $("#menuClose");
  function openMenu() { mnav.classList.add("is-open"); menuBtn.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; menuClose.focus(); }
  function closeMenu() { mnav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; menuBtn.focus(); }
  if (menuBtn) {
    menuBtn.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    $$("[data-close]", mnav).forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && mnav.classList.contains("is-open")) closeMenu(); });
    mnav.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var f = $$("a, button", mnav), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------- Footer: acordeones solo en móvil ---------- */
  var mq = window.matchMedia("(max-width: 600px)");
  function syncDetails() { $$(".footer details").forEach(function (d) { d.open = !mq.matches; }); }
  syncDetails();
  (mq.addEventListener ? mq.addEventListener("change", syncDetails) : mq.addListener(syncDetails));

  /* ---------- Selector de plan ---------- */
  var PLANS = {
    annual: { num: "$1,590", unit: "MXN al año", eq: 'Equivale a <span class="num">$132.50</span> al mes. Ahorras $678 frente al pago mensual.', btn: "Suscríbete por un año" },
    monthly: { num: "$189", unit: "MXN al mes", eq: "Se renueva cada mes. Cancela cuando quieras.", btn: "Suscríbete por mes" }
  };
  function currentPlan() { var c = $('input[name="plan"]:checked'); return c ? c.value : "unknown"; }
  $$('input[name="plan"]').forEach(function (r) {
    r.addEventListener("change", function () {
      var p = PLANS[r.value];
      $("#priceNum").textContent = p.num;
      $("#priceUnit").textContent = p.unit;
      $("#priceEq").innerHTML = p.eq;
      var b = $("#subBtn"); b.textContent = p.btn;
      var u = new URL(b.href); u.searchParams.set("utm_content", "pricing-" + r.value); b.href = u.toString();
      track("pricing_plan_select", { plan: r.value });
    });
  });

  /* ---------- Reproductor ---------- */
  var audio = $("#wpAudio"), player = $("#player");
  var pToggle = $("#pToggle"), pSeek = $("#pSeek"), pTime = $("#pTime"), pRate = $("#pRate"), pLive = $("#pLive"), pBar = $("#pBarMobile");
  var current = null, seeking = false;

  function fmt(s) {
    if (!isFinite(s)) return "0:00";
    s = Math.floor(s); var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(x).padStart(2, "0");
  }
  function announce(t) { pLive.textContent = t; }
  function setButtons() {
    var playing = !audio.paused;
    $$("[data-play]").forEach(function (b) {
      var mine = b.getAttribute("data-play") === current;
      var lbl = $(".lbl", b), tri = $(".tri", b);
      var isEn = b.closest("[lang=en]");
      if (lbl) lbl.textContent = mine && playing ? (isEn ? "Pause" : "Pausar") : mine ? (isEn ? "Resume" : "Continuar") : (isEn ? "Listen" : "Escuchar");
      if (tri) tri.textContent = mine && playing ? "❚❚" : "▶";
      b.setAttribute("aria-pressed", mine && playing ? "true" : "false");
    });
    $$("[data-ep]").forEach(function (el) { el.classList.toggle("is-playing", el.getAttribute("data-ep") === current); });
    pToggle.textContent = playing ? "❚❚" : "▶";
    pToggle.setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
  }
  function openPlayer() {
    player.hidden = false;
    requestAnimationFrame(function () { player.classList.add("is-open"); });
    document.documentElement.style.setProperty("--player-h", player.offsetHeight + "px");
  }
  function load(id) {
    var ep = EPISODES[id]; if (!ep) return;
    current = id;
    audio.src = ep.src;
    $("#pTitle").textContent = ep.title; $("#pShow").textContent = ep.show; $("#pArt").src = ep.art;
    var saved = JSON.parse(localStorage.getItem("wp-pos-" + id) || "0");
    if (saved > 30) audio.addEventListener("loadedmetadata", function once() { audio.currentTime = saved; audio.removeEventListener("loadedmetadata", once); });
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({ title: ep.title, artist: ep.show, album: "Whitepaper", artwork: [{ src: ep.art, sizes: "600x600", type: "image/jpeg" }] });
    }
  }
  function play(id) {
    if (id && id !== current) load(id);
    openPlayer();
    var p = audio.play();
    if (p && p.catch) p.catch(function () { announce("No pudimos cargar el audio. Escúchalo en Spotify o Apple Podcasts."); });
    track("audio_play", { episode: current });
  }
  $$("[data-play]").forEach(function (b) {
    b.addEventListener("click", function () {
      var id = b.getAttribute("data-play");
      if (id === current && !audio.paused) audio.pause(); else play(id);
    });
  });
  pToggle.addEventListener("click", function () { audio.paused ? play() : audio.pause(); });
  $("#pBack").addEventListener("click", function () { audio.currentTime = Math.max(0, audio.currentTime - 15); });
  $("#pFwd").addEventListener("click", function () { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 15); });
  pRate.addEventListener("click", function () {
    audio.playbackRate = audio.playbackRate === 1 ? 1.5 : audio.playbackRate === 1.5 ? 2 : 1;
    pRate.textContent = audio.playbackRate + "x";
    pRate.setAttribute("aria-label", "Velocidad de reproducción, actual " + audio.playbackRate + "x");
    announce("Velocidad " + audio.playbackRate + "x");
  });
  $("#pClose").addEventListener("click", function () {
    audio.pause(); player.classList.remove("is-open");
    document.documentElement.style.setProperty("--player-h", "0px");
    setTimeout(function () { player.hidden = true; }, 220);
  });
  pSeek.addEventListener("input", function () { seeking = true; });
  pSeek.addEventListener("change", function () { if (audio.duration) audio.currentTime = pSeek.value / 100 * audio.duration; seeking = false; });

  audio.addEventListener("play", function () { setButtons(); announce("Reproduciendo " + (EPISODES[current] || {}).show); });
  audio.addEventListener("pause", function () { setButtons(); announce("Pausado"); });
  audio.addEventListener("timeupdate", function () {
    var d = audio.duration || 0, t = audio.currentTime, pct = d ? t / d * 100 : 0;
    if (!seeking) pSeek.value = pct;
    pSeek.setAttribute("aria-valuetext", fmt(t) + " de " + fmt(d));
    pTime.textContent = fmt(t) + " / " + fmt(d);
    if (pBar) pBar.style.width = pct + "%";
    $$('[data-ep="' + current + '"] .progress i').forEach(function (i) { i.style.width = pct + "%"; });
    if (Math.floor(t) % 5 === 0) localStorage.setItem("wp-pos-" + current, JSON.stringify(t < d - 20 ? t : 0));
  });
  audio.addEventListener("error", function () { announce("No pudimos cargar el audio. Escúchalo en Spotify o Apple Podcasts."); });

  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", function () { play(); });
    navigator.mediaSession.setActionHandler("pause", function () { audio.pause(); });
    navigator.mediaSession.setActionHandler("seekbackward", function () { audio.currentTime -= 15; });
    navigator.mediaSession.setActionHandler("seekforward", function () { audio.currentTime += 15; });
  }

  document.addEventListener("keydown", function (e) {
    if (player.hidden || /input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable) return;
    if (e.key === "k" || e.key === "K") { e.preventDefault(); audio.paused ? play() : audio.pause(); }
    if (e.key === "j" || e.key === "J") audio.currentTime -= 15;
    if (e.key === "l" || e.key === "L") audio.currentTime += 15;
  });
})();
