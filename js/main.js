// Smooth scroll active nav link highlighting
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#mainNav .nav-link');

  function updateActiveLink() {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 80;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
});

// Contact form — static site, just show a friendly message
function handleContactSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('contactMsg');
  msg.style.display = 'block';
  msg.className = 'alert alert-success';
  msg.textContent = "Thank you for your message! I'll get back to you as soon as possible.";
  e.target.reset();
}
