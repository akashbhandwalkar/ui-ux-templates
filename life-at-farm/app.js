const body = document.querySelector('body');

body.style.transform = `scale(${(window.innerWidth / 1600) > 1 ? 1 : (window.innerWidth / 1600)})`