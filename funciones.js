document.addEventListener('DOMContentLoaded', function () {
    // Selección de elementos
    var menuIcon = document.getElementById('menuIcon');
    var navBar = document.getElementById('navBar');
    var homeLink = document.querySelector('.home');
    var links = document.querySelectorAll('#navBar a');

    // Función para cerrar el 'Menu Hamburguesa'
    function closeMenu() {
        navBar.style.display = 'none';
    }

    // Función para abrir el 'Menu Hamburguesa' en relación con el ancla del menú
    function openMenu() {
        if (navBar.style.display === 'block') {
            // Si el menú ya está abierto, ciérralo
            closeMenu();
        } else {
            var iconRect = menuIcon.getBoundingClientRect();
            navBar.style.display = 'block';
            navBar.style.top = iconRect.bottom + 'px'; // Abre el menú justo debajo del icono
            navBar.style.left = iconRect.left + 'px'; // Ajusta la posición izquierda del menú
        }
    }

    // Evento de clic en el ícono del 'Menu Hamburguesa'
    menuIcon.addEventListener('click', function () {
        openMenu();
    });

    // Cierra el menú al hacer clic en un enlace dentro de la navegación
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', closeMenu);
    }

    // Cierra el menú al hacer clic en cualquier lugar de la pantalla
    document.addEventListener('click', function (event) {
        var isClickInsideNavBar = navBar.contains(event.target);
        var isClickOnMenuIcon = event.target === menuIcon;

        if (!isClickInsideNavBar && !isClickOnMenuIcon) {
            closeMenu();
        }
    });

    // Desplazamiento suave al hacer clic en un enlace del 'Menu Hamburguesa'
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Desplazamiento suave al hacer clic en el enlace 'Home'
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        var targetElement = document.getElementById('home');  // Ajusta el ID de la sección de inicio
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Oculta el menú cuando se hace scroll
    window.addEventListener('scroll', closeMenu);
});