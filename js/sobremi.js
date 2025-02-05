// Animación de la sección "Sobre mí"
document.addEventListener("DOMContentLoaded", function () {
    const inicioContenedor = document.querySelector(".inicio-contenedor");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                inicioContenedor.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(inicioContenedor);
});