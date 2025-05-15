// 📌 footer.js - Manejo dinámico de la barra de navegación en el footer adaptable

document.addEventListener('DOMContentLoaded', () => {  
    // 🎭 Lista de íconos con sus respectivas IDs  
    const icons = [  
        { id: "home-icon" },     /* 🏠 Icono de Inicio */  
        { id: "plates-icon" },   /* 🍽️ Icono de Platos */  
        { id: "hearth-icon" },   /* ❤️ Icono de Favoritos */  
        { id: "inventary-icon" }, /* 📦 Icono de Inventario */  
        { id: "support-icon" }    /* 🛠️ Icono de Soporte */  
    ];  

    // 🔗 Elementos clave del DOM  
    const movingBar = document.getElementById("moving-bar");   /* 🏗️ Barra de navegación animada */  
    const iconsContainer = document.querySelector('.icons');   /* 📦 Contenedor de íconos */  
    const iconElements = icons.map(icon => document.getElementById(icon.id)); /* 🔗 Lista de elementos ícono */  

    /**  
     * 🔄 Función para mover la barra al centro del ícono correspondiente.  
     * @param {HTMLElement} iconElement - Elemento ícono al que debe moverse la barra  
     */  
    function moveBarToIcon(iconElement) {  
        if (!iconElement || !iconsContainer || !movingBar) return;  

        const iconRect = iconElement.getBoundingClientRect();  /* 🏷️ Obtención de coordenadas del ícono */  
        const iconsRect = iconsContainer.getBoundingClientRect(); /* 📌 Posición del contenedor de íconos */  

        const barWidth = 20; // 📏 Ancho fijo de la barra de navegación  
        const adjustmentFactor = 0; // 🎭 Factor de ajuste para posición fina  

        // 📌 Calcular el centro del ícono relativo al contenedor  
        const iconCenterRelativeToContainer = iconRect.left - iconsRect.left + (iconRect.width / 1.3);  

        // 🏁 Calcular la posición para centrar la barra bajo el ícono con ajuste  
        const barPosition = iconCenterRelativeToContainer - (barWidth / 2) + (iconRect.width * adjustmentFactor);  

        movingBar.style.transform = `translateX(${barPosition}px)`;  /* ✨ Aplicar transformación */  
        movingBar.style.width = `${barWidth}px`;  /* 📏 Establecer el ancho fijo */  
    }  

    /**  
     * 🚀 Inicializar la barra en el primer ícono (Home).  
     */  
    const homeIcon = document.getElementById("home-icon"); /* 🏠 Ícono inicial */  
    if (homeIcon) {  
        moveBarToIcon(homeIcon);  
    }  

    /**  
     * 🎯 Función genérica para manejar eventos de interacción con los íconos.  
     * @param {string} eventType - Tipo de evento a escuchar ('mouseover' o 'click')  
     */  
    function setupIconEventListeners(eventType) {  
        iconElements.forEach(iconElement => {  
            if (iconElement) {  
                iconElement.addEventListener(eventType, () => moveBarToIcon(iconElement));  
            }  
        });  
    }  

    // 🖱️ Eventos para mover la barra al pasar el mouse y al hacer click  
    setupIconEventListeners('mouseover');  
    setupIconEventListeners('click');  

    // 🔄 Restaurar barra al primer ícono si el mouse sale del footer  
    const footerElement = document.querySelector('footer');  
    if (footerElement) {  
        footerElement.addEventListener('mouseleave', () => {  
            if (homeIcon) {  
                moveBarToIcon(homeIcon);  
            }  
        });  
    }  

    // 📱 Opcional: Recalcular la posición de la barra en redimensionamiento de la ventana  
    window.addEventListener('resize', () => {  
        const activeIcon = document.querySelector('.icons > *:hover') || homeIcon; /* 🔄 Mantener la barra en el ícono activo o en el home */  
        if (activeIcon) {  
            moveBarToIcon(activeIcon);  
        }  
    });  
});
