// Basic UI: toggle nav, contact form client-side validation, set year
document.addEventListener('DOMContentLoaded', function () {
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
navToggle.addEventListener('click', function () {
const expanded = this.getAttribute('aria-expanded') === 'true';
this.setAttribute('aria-expanded', String(!expanded));
siteNav.style.display = expanded ? 'none' : 'block';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', function (e) {
const target = document.querySelector(this.getAttribute('href'));
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
// close mobile nav if open
if (window.innerWidth < 900 && siteNav.style.display === 'block') {
siteNav.style.display = 'none';
navToggle.setAttribute('aria-expanded', 'false');
}
}
});
});

// Contact form validation and placeholder submission
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
form.addEventListener('submit', function (e) {
e.preventDefault();
feedback.textContent = '';
const name = form.name.value.trim();
const email = form.email.value.trim();
const message = form.message.value.trim();

if (name.length < 2) return feedback.textContent = 'Please enter a valid name.';
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return feedback.textContent = 'Please enter a valid email.';
if (message.length < 10) return feedback.textContent = 'Message should be at least 10 characters.';

// Placeholder success flow — replace with real API POST to your server
feedback.style.color = 'green';
feedback.textContent = 'Thanks! Your message looks good. (This demo doesn’t actually send email.)';
form.reset();
setTimeout(()=> { feedback.style.color=''; feedback.textContent=''; }, 6000);
});

// Put current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
});