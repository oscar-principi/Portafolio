document.addEventListener("DOMContentLoaded", () => {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollToTop = document.getElementById("scroll-to-top");
    const sobreMiSection = document.getElementById("sobre-mi");
    const footerSection = document.querySelector("footer");
    const proyectosSection = document.getElementById("proyectos");

    if (scrollIndicator && scrollToTop && sobreMiSection && footerSection && proyectosSection) {
        // Crear el IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === sobreMiSection) {
                    if (entry.isIntersecting) {
                        // Si la sección "Sobre Mi" está visible, mostrar el indicador para ir a Proyectos
                        scrollIndicator.style.opacity = 1;
                        scrollIndicator.style.pointerEvents = 'auto'; 
                    } else {
                        // Si la sección "Sobre Mi" ya no está visible, ocultar el indicador
                        scrollIndicator.style.opacity = 0;
                        scrollIndicator.style.pointerEvents = 'none'; 
                    }
                }
                
                if (entry.target === proyectosSection) {
                    if (entry.isIntersecting) {
                        // Si la sección "Proyectos" está visible, ocultar el indicador
                        scrollIndicator.style.opacity = 0;
                        scrollIndicator.style.pointerEvents = 'none'; 
                    }
                }
                
                if (entry.target === footerSection) {
                    if (entry.isIntersecting) {
                        // Si el footer está visible, mostrar el indicador para volver al inicio
                        scrollToTop.style.opacity = 1;
                        scrollToTop.style.pointerEvents = 'auto'; 
                    } else {
                        // Si el footer ya no está visible, ocultar el indicador
                        scrollToTop.style.opacity = 0;
                        scrollToTop.style.pointerEvents = 'none'; 
                    }
                }
                
            });
        }, {
            threshold: 0.5 
        });

        observer.observe(sobreMiSection);
        observer.observe(proyectosSection);
        observer.observe(footerSection);

        scrollIndicator.addEventListener("click", () => {
            if (proyectosSection) {
                proyectosSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });

        scrollToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
