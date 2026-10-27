// Lazy, accessible video for csjj.dk.
// - <video data-lazy> plays only while in view, and not before the page has loaded; its <source data-src> files
//   are attached on first view, so nothing downloads before that (a video hidden by CSS never loads).
// - data-poster is set as the poster shortly before the video scrolls near the screen.
// - Pauses when the tab is hidden. With prefers-reduced-motion only the poster shows (the play button still works).
// - .vid-btn toggles the video in the same .vid wrapper; .yt-facade loads the YouTube player on click only.
(function () {
  document.documentElement.classList.add('js');
  var es = document.documentElement.lang.indexOf('es') === 0;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var videos = [].slice.call(document.querySelectorAll('video[data-lazy]'));
  var state = new Map();
  var loaded = document.readyState === 'complete';

  function poster(v) {
    if (v.dataset.poster) { v.poster = v.dataset.poster; v.removeAttribute('data-poster'); }
  }
  function attach(v) {
    poster(v);
    var srcs = v.querySelectorAll('source[data-src]');
    if (!srcs.length) return;
    srcs.forEach(function (s) { s.src = s.dataset.src; s.removeAttribute('data-src'); });
    v.load();
  }
  function shouldPlay(v) {
    var st = state.get(v);
    return st.inView && !st.userPaused && !document.hidden && (st.userPlayed || (loaded && !reduce.matches));
  }
  function update(v) {
    if (shouldPlay(v)) { attach(v); var p = v.play(); if (p) p.catch(function () {}); }
    else if (!v.paused) v.pause();
  }
  function shown(v) { return v.getClientRects().length > 0; }  // false while hidden by CSS
  function button(v) { var w = v.closest('.vid'); return w && w.querySelector('.vid-btn'); }
  function label(v) {
    var b = button(v); if (!b || !shown(v)) return;
    var playing = !v.paused;
    b.setAttribute('aria-label', playing ? (es ? 'Pausar el vídeo' : 'Pause video') : (es ? 'Reproducir el vídeo' : 'Play video'));
    b.classList.toggle('is-paused', !playing);
  }

  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { state.get(e.target).inView = e.isIntersecting && e.intersectionRatio >= 0.25; update(e.target); });
  }, { threshold: [0, 0.25, 0.5] }) : null;
  var near = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { poster(e.target); near.unobserve(e.target); } });
  }, { rootMargin: '600px 0px' }) : null;

  videos.forEach(function (v) {
    state.set(v, { inView: false, userPaused: false, userPlayed: false });
    v.addEventListener('play', function () { label(v); });
    v.addEventListener('pause', function () { label(v); });
    label(v);
    if (io) io.observe(v);
    if (near) near.observe(v); else poster(v);
  });
  if (!loaded) window.addEventListener('load', function () { loaded = true; videos.forEach(update); });

  // one button per .vid; it acts on whichever of its videos is shown (the hero has two)
  document.querySelectorAll('.vid-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = [].filter.call(b.closest('.vid').querySelectorAll('video[data-lazy]'), shown)[0];
      if (!v) return;
      var st = state.get(v);
      if (v.paused) { st.userPaused = false; st.userPlayed = true; st.inView = true; update(v); }
      else { st.userPaused = true; v.pause(); }
    });
  });

  document.addEventListener('visibilitychange', function () { videos.forEach(update); });
  if (reduce.addEventListener) reduce.addEventListener('change', function () { videos.forEach(update); });

  // YouTube: poster + play button until clicked, then the nocookie player
  document.querySelectorAll('.yt-facade').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.yt + '?rel=0&autoplay=1' + (btn.dataset.ytParams || '');
      f.title = btn.dataset.ytTitle || 'YouTube video';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      btn.replaceWith(f);
      f.focus();
    });
  });
})();
