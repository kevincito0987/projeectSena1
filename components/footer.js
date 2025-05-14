// footer.js

document.addEventListener('DOMContentLoaded', () => {
    const icons = [
        { id: "home-icon", position: 0 },
        { id: "plates-icon", position: 1 },
        { id: "hearth-icon", position: 2 },
        { id: "inventary-icon", position: 3 },
        { id: "support-icon", position: 4 }
    ];

    const movingBar = document.getElementById("moving-bar");
    const iconsContainer = document.querySelector('.icons'); // Seleccionamos el contenedor de los íconos

    function moveBarToIcon(iconElement) {
        const iconRect = iconElement.getBoundingClientRect();
        const footerRect = iconElement.closest('footer').getBoundingClientRect();
        // Recalculamos la posición tomando el contenedor como referencia para mayor precisión
        const barPosition = iconRect.left - footerRect.left + (iconElement.offsetWidth / 2) - (movingBar.offsetWidth / 2);
        movingBar.style.transform = `translateX(${barPosition}px)`;
    }

    // Inicializar la barra en el primer ícono (la casa)
    const homeIcon = document.getElementById("home-icon");
    if (homeIcon) {
        moveBarToIcon(homeIcon);
    }

    icons.forEach(icon => {
        const iconElement = document.getElementById(icon.id);
        if (iconElement) {
            iconElement.addEventListener('mouseover', () => { // Simplificamos el listener
                moveBarToIcon(iconElement);
            });
        }
    });

    // Opcional: Centrar la barra al hacer click (si quieres que se quede en el ícono clickeado)
    icons.forEach(icon => {
        const iconElement = document.getElementById(icon.id);
        if (iconElement) {
            iconElement.addEventListener('click', () => {
                moveBarToIcon(iconElement);
                // Aquí podrías agregar lógica para marcar el ícono como "activo" visualmente
            });
        }
    });

    // Opcional: Asegurar que la barra se mueva al primer ícono si el mouse sale del footer
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.addEventListener('mouseleave', () => {
            if (homeIcon) {
                moveBarToIcon(homeIcon);
            }
        });
    }
});