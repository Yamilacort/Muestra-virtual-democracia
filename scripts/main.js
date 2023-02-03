//Declaraciones//
    const d = document
    const menuBTN = d.querySelector('nav .btn')
    const menuLst = d.querySelector('nav .menu')

/*Navegacion*/

menuBTN.onclick = () => menuLst.classList.toggle ('active') ? 
menuBTN.innerHTML = "&times;" : menuBTN.innerHTML = "&equiv;"

// Obtenemos el elemento con clase "scrollup"
const scrollUpButton = document.querySelector('.scrollup');

// Añadimos un evento "click" al botón
scrollUpButton.addEventListener('click', () => {
  // Hacemos scroll hacia arriba usando el método scrollTo()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});