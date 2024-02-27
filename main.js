const doc = document;

const navbar = doc.querySelector('.navbar')
const abrirNav = doc.querySelector('#btn-abrir-menu');
const cerrarNav = doc.querySelector('#btn-cerrar-menu');



abrirNav.addEventListener('click', ()=>{  
  navbar.classList.add('show--item')
})

cerrarNav.addEventListener('click', () => {
  navbar.classList.remove('show--item')
})