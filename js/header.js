// Efecto de escritura en el header
const textArray = ["Oscar Príncipi Developer."];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 200;
const erasingSpeed = 50;
const delayBetweenTexts = 3000;

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
    if (charIndex > 1) {
        typedTextElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});