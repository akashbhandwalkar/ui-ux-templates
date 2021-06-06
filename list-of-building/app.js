



var dom = document.querySelector('.stars');

function plot() {
    for (var i = 0; i < 100; i++) {
        var star = document.createElement('div');
        star.style.left = (Math.random() * 100 ) % 100 + "%";
        star.style.bottom = "-" + (Math.random() * 100 ) % 100 + "%";
        dom.appendChild(star);
    }
}

for(var i = 0; i < 10; i++) {
    setTimeout(plot, 1000);
}

const building1 = document.getElementsByClassName('glowing-city-container')[0];
const building2 = document.getElementsByClassName('holiday-home-container')[0];
const building3 = document.getElementsByClassName('hospital-container')[0];
const building4 = document.getElementsByClassName('home-container')[0];
const building5 = document.getElementsByClassName('building-with-train-container')[0];
const building6 = document.getElementsByClassName('castle-container')[0];
building1.style.display = 'block';
const buildings = [building3, building4, building5, building6, building2];
var index = 0;
const interval = setInterval(() => {
    if(index > 4) {
        clearInterval(interval);
    }
    buildings[index].style.display = 'block';
    index++;
}, 3000);