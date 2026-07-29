(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function label(theme) {
    btn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  label(document.documentElement.getAttribute('data-theme') || 'light');

  btn.addEventListener('click', function () {
    var next =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    label(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Private mode: the choice just will not persist.
    }
  });

  // Follow the OS while the visitor has not made an explicit choice.
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', function (e) {
    try {
      if (localStorage.getItem('theme')) return;
    } catch (err) {
      // Ignore storage errors and fall through to following the OS.
    }
    var theme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    label(theme);
  });
})();
