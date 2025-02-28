window.addEventListener('scroll', function() {
    document.querySelectorAll("#grid-darken-1, #grid-darken-2").forEach(function(grid) {
        let gridOffsetTop = grid.getBoundingClientRect().top + window.scrollY;  // Posición del grid respecto al scroll
        let scrollPos = window.scrollY;

        // Calcula la opacidad solo cuando estás cerca del grid
        if (scrollPos >= gridOffsetTop - window.innerHeight && scrollPos <= gridOffsetTop + grid.offsetHeight) {
            let progress = (scrollPos - (gridOffsetTop - window.innerHeight)) / (grid.offsetHeight + window.innerHeight);
            let opacity = Math.min(1, Math.max(0, progress));  // Controla el rango [0, 1]
            let colorValue = Math.floor(94 - opacity * 80);  // Oscurece gradualmente
            grid.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        }
    });
}, { passive: true });
