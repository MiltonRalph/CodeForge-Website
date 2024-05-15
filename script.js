const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});
const svg = document.querySelector('.svg');
const header = document.querySelector('h1');
const p = document.getElementById('hero-p');

const show = () => {
  svg.style.opacity = 0;
  setTimeout(() => {
    svg.classList.add('svg-animate');
  }, 500);
};

const show1 = () => {
  header.style.opacity = 0;
  setTimeout(() => {
    header.classList.add('header');
  }, 2000);
};

const show2 = () => {
  p.style.opacity = 0;
  setTimeout(() => {
    p.classList.add('hero-p');
  }, 2500);
};

window.addEventListener('load', show);
window.addEventListener('load', show1);
window.addEventListener('load', show2);

// Reveal Elements On Scroll
window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('show');
    } else {
      reveals[i].classList.remove('show');
    }
  }

  let group1 = document.querySelectorAll('.reveal1');
  
  for (let i = 0; i < group1.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = group1[i].getBoundingClientRect().top;
    let revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      group1[i].classList.add('animate');
    } else {
      group1[i].classList.remove('animate');
    }
  }
  
  let group2 = document.querySelectorAll('.reveal2');
  
  for (let i = 0; i < group2.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = group2[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      group2[i].classList.add('animate1');
    } else {
      group2[i].classList.remove('animate1');
    }
  }
}

const links = document.querySelectorAll('.link');
const buttons = document.querySelectorAll('button');

links.forEach((link) =>
link.addEventListener('click', (e) => {
    e.preventDefault();
  })
);
buttons.forEach((button) =>
button.addEventListener('click', (e) => {
    e.preventDefault();
  })
);
// listItems.forEach((item) => {
  //   item.addEventListener('click', (e) => {
    //     e.target.remove();
    //   });
    // });
