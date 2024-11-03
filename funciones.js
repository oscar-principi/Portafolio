  // Efecto de fondo y color de letras en la cabecera al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  
  
  // -----------------------------------------------------------------------------------------------------Carrusel efecto infinito y movimiento automatico
  const carousel = document.querySelector('.carousel-images');
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    let currentIndex = 0;
    let itemWidth = items[0].offsetWidth;

    // Duplicar los primeros y últimos elementos para crear el efecto infinito
    carousel.prepend(items[items.length - 1].cloneNode(true));
    carousel.append(items[0].cloneNode(true));

    function updateCarousel() {
        carousel.style.transition = 'transform 0.3s ease-in-out';
        carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
    }

    function moveCarousel(direction) {
        currentIndex += direction;

        // Transición de desplazamiento infinito
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;

        // Ajuste de índice para el efecto infinito
        carousel.addEventListener('transitionend', () => {
            if (currentIndex === -1) {
                carousel.style.transition = 'none';
                currentIndex = items.length - 1;
                carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
            } else if (currentIndex === items.length) {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
            }
        });
    }

    // Ajustar el ancho de cada slide al redimensionar la ventana
    window.addEventListener('resize', () => {
        itemWidth = items[0].offsetWidth;
        updateCarousel();
    });

    // Configurar el movimiento automático del carrusel
    setInterval(() => {
        moveCarousel(1); // Mueve hacia la siguiente imagen
    }, 5000); // Cambia la imagen cada 5 segundos (5000 ms)

    // Posicionar el carrusel en el primer elemento real
    updateCarousel();
    
  
// -----------------------------------------------------------------------------------------------------Mensaje bienvenida
const textArray = [
    "Oscar Príncipi Developer."
];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 200; // Velocidad de escritura (ms)
const erasingSpeed = 50; // Velocidad de borrado (ms)
const delayBetweenTexts = 3000; // Pausa entre frases (ms)

const typedTextElement = document.getElementById("typed-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedTextElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingSpeed);
    }
}

// Iniciar la animación
document.addEventListener("DOMContentLoaded", () => {
    type();
});



//--------------------------------------------------------------------------------------------------