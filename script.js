/* =========================
   MENU MOBILE
========================= */

const menuMobile = document.querySelector('.menu-mobile');
const navbar = document.querySelector('.navbar');

menuMobile.addEventListener('click', () => {

  navbar.classList.toggle('active');

});


/* =========================
   FECHAR MENU AO CLICAR
========================= */

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

  link.addEventListener('click', () => {

    navbar.classList.remove('active');

  });

});


/* =========================
   HEADER AO ROLAR
========================= */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    header.classList.add('scroll');

  } else {

    header.classList.remove('scroll');

  }

});


/* =========================
   ANIMAÇÃO SCROLL
========================= */

const sections = document.querySelectorAll(
  '.card, .gallery-item, .sobre-img, .sobre-text, .contato-card, .oracao-form'
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

}, {
  threshold: 0.2
});

sections.forEach((section) => {

  section.classList.add('hidden');

  observer.observe(section);

});


/* =========================
   FORMULÁRIO ORAÇÃO
========================= */

const form = document.querySelector('.oracao-form');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const nome = form.querySelector('input').value;
  const pedido = form.querySelector('textarea').value;

  const mensagem = `
Olá, meu nome é ${nome}.

Pedido de oração:
${pedido}
  `;

  const whatsappURL =
    `https://wa.me/5521964440961?text=${encodeURIComponent(mensagem)}`;

  window.open(whatsappURL, '_blank');

  form.reset();

});


/* =========================
   EFEITO PARALLAX HERO
========================= */

window.addEventListener('scroll', () => {

  const hero = document.querySelector('.hero');

  let scrollPosition = window.pageYOffset;

  hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

});


/* =========================
   ANIMAÇÃO SUAVE HERO
========================= */

window.addEventListener('load', () => {

  document.body.classList.add('loaded');

});


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const whatsappButton = document.querySelector('.whatsapp-button');

window.addEventListener('scroll', () => {

  if(window.scrollY > 400){

    whatsappButton.style.opacity = '1';
    whatsappButton.style.visibility = 'visible';

  } else {

    whatsappButton.style.opacity = '0';
    whatsappButton.style.visibility = 'hidden';

  }

});


/* =========================
   EFEITO DIGITAÇÃO HERO
========================= */

const subtitle = document.querySelector('.subtitle');

const texto = subtitle.innerText;

subtitle.innerText = '';

let index = 0;

function escreverTexto(){

  if(index < texto.length){

    subtitle.innerHTML += texto.charAt(index);

    index++;

    setTimeout(escreverTexto, 70);

  }

}

escreverTexto();


/* =========================
   GALERIA LIGHTBOX SIMPLES
========================= */

const imagens = document.querySelectorAll('.gallery-item img');

imagens.forEach((img) => {

  img.addEventListener('click', () => {

    const overlay = document.createElement('div');

    overlay.classList.add('lightbox');

    overlay.innerHTML = `
      <img src="${img.src}">
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {

      overlay.remove();

    });

  });

});


/* =========================
   PRELOAD SUAVE
========================= */

window.addEventListener('load', () => {

  document.body.style.opacity = '1';

});


/* =========================
   LOG
========================= */

console.log(`
======================================
 Site Oficial - Julio Herculano
 Desenvolvido com HTML, CSS e JS
======================================
`);