// script.js
const firmName = "PortEX Trading";

// insert firm name in all placeholders
document.querySelectorAll('#firm-name').forEach(el => el.textContent = firmName);

// set copyright year
document.getElementById && document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// contact form handling (all pages share same form id)
const form = document.getElementById('contactForm');
if(form){
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('name')||{}).value || '';
    const email = (document.getElementById('email')||{}).value || '';
    const message = (document.getElementById('message')||{}).value || '';
    if(!name.trim() || !email.trim() || !message.trim()){
      if(status){ status.textContent = 'Please fill in required fields.'; status.style.color = 'salmon'; }
      return;
    }
    // For now simulate success (replace with real endpoint later)
    if(status){ status.textContent = 'Thanks — we received your message. We will reply shortly.'; status.style.color = 'lightgreen'; }
    form.reset();
  });
}
