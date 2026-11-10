(() => {
  const root = document.documentElement;
  const radios = [...document.querySelectorAll('input[name="theme"]')];
  const status = document.querySelector('#theme-status');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const messages = { light: 'Looking bright and lovely.', dark: 'A softer glow for late hours.', system: 'Following your device settings.' };
  let preference = localStorage.getItem('tone-theme') || 'system';

  function applyTheme() {
    const dark = preference === 'dark' || (preference === 'system' && media.matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    root.style.colorScheme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#171d1a' : '#f7f8fa';
    radios.forEach((radio) => { radio.checked = radio.value === preference; });
    status.textContent = messages[preference];
  }

  radios.forEach((radio) => radio.addEventListener('change', () => {
    preference = radio.value;
    localStorage.setItem('tone-theme', preference);
    applyTheme();
  }));
  media.addEventListener('change', () => { if (preference === 'system') applyTheme(); });
  applyTheme();
})();
