// footer.js

document.addEventListener('DOMContentLoaded', () => {
    const iconsData = [
        { id: "home-icon" },
        { id: "plates-icon" },
        { id: "hearth-icon" },
        { id: "inventary-icon" },
        { id: "support-icon" }
    ];

    const movingBar = document.getElementById("moving-bar");
    const iconsContainer = document.querySelector('.icons'); // Referencia al contenedor

    function moveBarToIcon(iconElement) {
        if (!movingBar || !iconElement || !iconsContainer) {
            console.error("Error: Elementos no válidos en moveBarToIcon.");
            return;
        }

        const iconRect = iconElement.getBoundingClientRect();
        const footerRect = iconElement.closest('footer').getBoundingClientRect();
        const iconsContainerRect = iconsContainer.getBoundingClientRect(); // Obtener la posición del contenedor

        // Calcular la posición teniendo en cuenta el posible margen izquierdo del contenedor
        const barPosition = (iconRect.left - iconsContainerRect.left) + (iconElement.offsetWidth / 2) - (movingBar.offsetWidth / 2);
        movingBar.style.transform = `translateX(${barPosition}px)`;
    }

    function initializeMovingBar() {
        const homeIcon = document.getElementById("home-icon");
        if (homeIcon) {
            moveBarToIcon(homeIcon);
        }
    }

    iconsData.forEach(iconInfo => {
        const iconElement = document.getElementById(iconInfo.id);
        if (iconElement) {
            iconElement.addEventListener('mouseover', () => {
                moveBarToIcon(iconElement);
            });
            iconElement.addEventListener('click', () => {
                moveBarToIcon(iconElement);
                // Lógica adicional para el click si es necesario
            });
        } else {
            console.warn(`Advertencia: Ícono con ID "${iconInfo.id}" no encontrado en el DOM.`);
        }
    });

    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.addEventListener('mouseleave', () => {
            initializeMovingBar();
        });
    }

    window.addEventListener('resize', () => {
        setTimeout(initializeMovingBar, 100);
    });

    initializeMovingBar();
});