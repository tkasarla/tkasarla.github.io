(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  // Light is the default. The OS preference is intentionally ignored; only an
  // explicit choice, saved in localStorage, switches the site to dark.
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    btn.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
  }

  apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  btn.addEventListener('click', function () {
    var next =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark';
    apply(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Private mode: the choice just will not persist.
    }
  });
})();
