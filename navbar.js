// Funcionalidad del navbar mejorada
class NavbarController {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.menu = document.querySelector('.navbar-menu');
        this.initEventListeners();
    }

    initEventListeners() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }
    }

    toggleMenu() {
        if (this.menu) {
            this.menu.style.display = 
                this.menu.style.display === 'flex' ? 'none' : 'flex';
        }
    }

    closeMenu() {
        if (this.menu) {
            this.menu.style.display = 'none';
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new NavbarController();
});
