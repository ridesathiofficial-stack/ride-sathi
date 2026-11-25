// Paste your verified public Google Forms links here before publishing.
const forms = {
  customer: 'https://docs.google.com/forms/d/e/1FAIpQLSeKDeXoUuMg27-AnmIT8sjNOwHc1Br1OlFxyjzxfQy3i8VRfQ/viewform?usp=dialog',
  driver: ''
};

const businessEmail = '';
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelectorAll('[data-form]').forEach(button=>button.addEventListener('click',()=>{const url=forms[button.dataset.form];if(url && /^https:\/\/(forms\.gle\/|docs\.google\.com\/forms\/)/.test(url)){window.location.assign(url);}else{document.querySelector('#status').textContent='Interest registration is not open yet. Please check back later.';}}));
if(businessEmail){const a=document.createElement('a');a.href='mailto:'+businessEmail;a.textContent=businessEmail;document.querySelector('#contact-text').replaceChildren('Business enquiries: ',a);}
document.querySelector('#year').textContent=new Date().getFullYear();
