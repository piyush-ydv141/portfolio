document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle'); // Get the toggle checkbox
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)'); // Detect system dark mode preference

  // Get saved theme from localStorage (if exists)
  const savedTheme = localStorage.getItem('theme');
  const currentTheme = savedTheme || (prefersDark.matches ? 'dark' : 'light');

  // Apply the theme on page load
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
    themeToggle.checked = true; // Set toggle to checked for dark mode
  }

  // Toggle dark/light mode on user change
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save dark mode to localStorage
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save light mode to localStorage
    }
  });
});
