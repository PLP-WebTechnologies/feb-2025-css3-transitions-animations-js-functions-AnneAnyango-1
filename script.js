const btn = document.getElementById('animateBtn');
const heading = document.getElementById('heading');

// Loading theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// Adding click event to button
btn.addEventListener('click', () => {
  // Triggering CSS animation
  btn.classList.add('animate');

  // Removing the animation class after it finishes (so it can be triggered again)
  setTimeout(() => {
    btn.classList.remove('animate');
  }, 500);

  // Toggling theme and save to localStorage
  document.body.classList.toggle('dark');
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});