// 📌 footer.js - Manejo dinámico de la barra de navegación en el footer

document.addEventListener('DOMContentLoaded', () => {  
    // 🎭 Lista de íconos con sus respectivas IDs y posiciones  
    const icons = [  
        { id: "home-icon", position: 0 },  /* 🏠 Icono de Inicio */  
        { id: "plates-icon", position: 1 }, /* 🍽️ Icono de Platos */  
        { id: "hearth-icon", position: 2 }, /* ❤️ Icono de Favoritos */  
        { id: "inventary-icon", position: 3 }, /* 📦 Icono de Inventario */  
        { id: "support-icon", position: 4 } /* 🛠️ Icono de Soporte */  
    ];  

    // 🔗 Elementos clave del DOM  
    const movingBar = document.getElementById("moving-bar");  /* 🏗️ Barra de navegación animada */  
    const iconsContainer = document.querySelector('.icons');  /* 📦 Contenedor de íconos */  

    /**  
     * 🔄 Función para mover la barra al ícono correspondiente  
     * @param {HTMLElement} iconElement - Elemento ícono al que debe moverse la barra  
     */  
    function moveBarToIcon(iconElement) {  
        const iconRect = iconElement.getBoundingClientRect();  /* 🏷️ Obtención de coordenadas del ícono */  
        const footerRect = iconElement.closest('footer').getBoundingClientRect();  /* 📌 Posición del footer */  

        // 📐 Calcular la posición de la barra respecto al ícono seleccionado  
        const barPosition = iconRect.left - footerRect.left +  
                            (iconElement.offsetWidth / 2) -  
                            (movingBar.offsetWidth / 2);  

        movingBar.style.transform = `translateX(${barPosition}px)`;  /* ✨ Animación de desplazamiento */  
    }  

    /**  
     * 🚀 Inicializar la barra en el primer ícono (Home)  
     */  
    const homeIcon = document.getElementById("home-icon");  /* 🏠 Ícono inicial */  
    if (homeIcon) {  
        moveBarToIcon(homeIcon);  
    }  

    // 🎯 Evento para mover la barra al pasar el mouse sobre un ícono  
    icons.forEach(icon => {  
        const iconElement = document.getElementById(icon.id);  /* 🔗 Obtener ícono del DOM */  
        if (iconElement) {  
            iconElement.addEventListener('mouseover', () => moveBarToIcon(iconElement));  /* 🖱️ Movimiento al pasar el mouse */  
        }  
    });  

    // ✅ Evento opcional: Fijar barra al hacer click en un ícono  
    icons.forEach(icon => {  
        const iconElement = document.getElementById(icon.id);  
        if (iconElement) {  
            iconElement.addEventListener('click', () => {  
                moveBarToIcon(iconElement);  
                // 💡 Aquí podrías marcar visualmente el ícono activo si es necesario  
            });  
        }  
    });  

    // 🔄 Restaurar barra al primer ícono si el mouse sale del footer  
    const footerElement = document.querySelector('footer');  
    if (footerElement) {  
        footerElement.addEventListener('mouseleave', () => {  
            if (homeIcon) {  
                moveBarToIcon(homeIcon);  
            }  
        });  
    }  
});
