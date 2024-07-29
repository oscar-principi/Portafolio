document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menuIcon');
    var navBar = document.getElementById('navBar');
    var links = document.querySelectorAll('#navBar a');

    function closeMenu() {
        navBar.style.display = 'none';
    }

    function openMenu() {
        if (navBar.style.display === 'block') {
            closeMenu();
        } else {
            var iconRect = menuIcon.getBoundingClientRect();
            navBar.style.display = 'block';
            navBar.style.top = iconRect.bottom + 'px';
            navBar.style.left = iconRect.left + 'px';
        }
    }

    function smoothScrollTo(target, duration) {
        var start = window.scrollY || window.pageYOffset;
        var startTime = null;
        var targetPosition = target.getBoundingClientRect().top + start;
        var distance = targetPosition - start;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var progress = Math.min(timeElapsed / duration, 1);
            var easeInOutQuad = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, start + distance * easeInOutQuad);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    menuIcon.addEventListener('click', function () {
        openMenu();
    });

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            smoothScrollTo(targetElement, 1000);
            closeMenu();
        });
    }
    
    document.addEventListener('click', function (event) {
        var isClickInsideNavBar = navBar.contains(event.target);
        var isClickOnMenuIcon = event.target === menuIcon;

        if (navBar.style.display === 'block' && !isClickInsideNavBar && !isClickOnMenuIcon) {
            closeMenu();
        }
    });

    // Desplazamiento suave al hacer clic en el enlace 'Home'
    document.querySelector('a[href="#inicio"]').addEventListener('click', function (event) {
        event.preventDefault();
        var targetElement = document.getElementById('inicio');
        if (targetElement) {
            smoothScrollTo(targetElement, 1000);
        }
    });

    window.addEventListener('scroll', closeMenu);
    });
