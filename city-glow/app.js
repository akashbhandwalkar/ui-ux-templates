



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