
var polygons = {
    'triangle': 'polygon(0% 0%, 100% 100%, 0% 100%)',
    'rectangle': 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
    "pentagon": 'polygon(0% 0%, 66% 0, 100% 33%, 33% 66%, 0 33%)',
    "hexagon": "polygon(0 50%, 33% 0, 66% 0, 100% 50%, 66% 100%, 33% 100%)",
    "plus": "polygon(33% 0, 66% 0, 66% 33%, 100% 33%, 100% 66%, 66% 66%, 66% 100%, 33% 100%, 33% 66%, 0 66%, 0 33%, 33% 33%)",
    "close": "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
    "ellipse": "ellipse(25% 40% at 50% 50%)",
    "circle": "circle(50% at 50% 50%)",
    "trapezoid": "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    "parallelogram": "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    "message icon": "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"
}


// DOM Elements

var shape = document.querySelector('#shape');
var buttons = document.querySelector('.cta-container');
var codeblock = document.querySelector('#codeblock');
// Adding events

buttons.addEventListener('click', (event) => {
    console.log(event.target.innerHTML.trim());
    shape.style['clip-path'] = polygons[event.target.innerHTML.trim()];
    codeblock.innerHTML = '<pre>' + polygons[event.target.innerHTML.trim()] + '</pre>';
            
});
