
const demo = document.querySelector('.demo');

function onchangeHorizontal(event, key) {

    demo.style[key] = event.value + "%";
}