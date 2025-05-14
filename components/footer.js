// 📌 footer.js - Manejo dinámico de la barra de navegación en el footer

document.addEventListener('DOMContentLoaded', () => {  
    // 🎭 Lista de íconos con sus respectivas IDs  
    const iconsData = [  
        { id: "home-icon" },  /* 🏠 Icono de Inicio */  
        { id: "plates-icon" }, /* 🍽️ Icono de Platos */  
        { id: "hearth-icon" }, /* ❤️ Icono de Favoritos */  
        { id: "inventary-icon" }, /* 📦 Icono de Inventario */  
        { id: "support-icon" } /* 🛠️ Icono de Soporte */  
    ];  

    // 🔗 Elementos clave del DOM  
    const movingBar = document.getElementById("moving-bar");  /* 🏗️ Barra de navegación animada */  
    const iconsContainer = document.querySelector('.icons');  /* 📦 Contenedor de íconos */  

    /**  
     * 🔄 Función para mover la barra al ícono correspondiente  
     * @param {HTMLElement} iconElement - Elemento ícono al que debe moverse la barra  
     */  
    function moveBarToIcon(iconElement) {  
        if (!movingBar || !iconElement || !iconsContainer) {  
            console.error("❌ Error: Elementos no válidos en moveBarToIcon.");  
            return;  
        }  

        const iconRect = iconElement.getBoundingClientRect();  /* 🏷️ Obtención de coordenadas del ícono */  
        const footerRect = iconElement.closest('footer').getBoundingClientRect();  /* 📌 Posición del footer */  
        const iconsContainerRect = iconsContainer.getBoundingClientRect();  /* 📦 Posición del contenedor de íconos */  

        // 📐 Calcular la posición de la barra respecto al ícono seleccionado  
        const barPosition = (iconRect.left - iconsContainerRect.left) +  
                            (iconElement.offsetWidth / 2) -  
                            (movingBar.offsetWidth / 2);  

        movingBar.style.transform = `translateX(${barPosition}px)`;  /* ✨ Animación de desplazamiento */  
    }  

    /**  
     * 🚀 Inicializar la barra en el primer ícono (Home)  
     */  
    function initializeMovingBar() {  
        const homeIcon = document.getElementById("home-icon");  /* 🏠 Ícono inicial */  
        if (homeIcon) {  
            moveBarToIcon(homeIcon);  
        }  
    }  

    // 🎯 Evento para mover la barra al pasar el mouse sobre un ícono  
    iconsData.forEach(iconInfo => {  
        const iconElement = document.getElementById(iconInfo.id);  /* 🔗 Obtener ícono del DOM */  
        if (iconElement) {  
            iconElement.addEventListener('mouseover', () => moveBarToIcon(iconElement));  /* 🖱️ Movimiento al pasar el mouse */  
            iconElement.addEventListener('click', () => {  
                moveBarToIcon(iconElement);  
                // 💡 Aquí podrías marcar visualmente el ícono activo si es necesario  
            });  
        } else {  
            console.warn(`⚠️ Advertencia: Ícono con ID "${iconInfo.id}" no encontrado en el DOM.`);  
        }  
    });  

    // 🔄 Restaurar barra al primer ícono si el mouse sale del footer  
    const footerElement = document.querySelector('footer');  
    if (footerElement) {  
        footerElement.addEventListener('mouseleave', initializeMovingBar);  
    }  

    // 📏 Ajustar posición de la barra al cambiar el tamaño de la ventana  
    window.addEventListener('resize', () => setTimeout(initializeMovingBar, 100));  

    // 🔥 Ejecutar inicialización al cargar la página  
    initializeMovingBar();  
});
