// Animación de los proyectos
document.addEventListener("DOMContentLoaded", () => {
    const proyectos = document.querySelectorAll(".proyecto");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.5 }); // Ajustado para dispositivos móviles

    proyectos.forEach(proyecto => observer.observe(proyecto));
});