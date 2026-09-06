// Simple JavaScript for theme toggle and dynamic footer year

document.addEventListener('DOMContentLoaded', () => {
  // Set dynamic year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Theme toggle logic (Light / Dark mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Check localStorage or default to dark
  const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateToggleButton(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateToggleButton(newTheme);
  });

  function updateToggleButton(theme) {
    themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
});

