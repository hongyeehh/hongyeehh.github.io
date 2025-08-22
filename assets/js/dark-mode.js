(function() {
  const storageKey = 'theme';
  const toggle = document.getElementById('theme-toggle');

  const setTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
  };

  const stored = localStorage.getItem(storageKey);
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored);
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(current ? 'light' : 'dark');
    });
  }
})();
