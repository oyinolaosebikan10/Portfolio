const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger){

hamburger.onclick = () => {
navLinks.classList.toggle('active');
}

}

const glow = document.querySelector('.cursor-glow');

if(glow){

document.addEventListener('mousemove', e => {

glow.style.left = e.clientX + 'px';
glow.style.top = e.clientY + 'px';

});

}

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});

},{threshold:0.15});

const fadeElements = document.querySelectorAll('.fade');
fadeElements.forEach(el => observer.observe(el));