const element = document.getElementById('some-element-you-want-to-animate'); 
let start;
let count = 0;
function step(timestamp) {
  console.log('came');
  element.style.transform = 'translateX(500px)';
}

window.requestAnimationFrame(step);