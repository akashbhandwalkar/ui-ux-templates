const body = document.querySelector('body');

body.style.transform = `scale(${(window.innerWidth / 1600) > 1 ? 1 : (window.innerWidth / 1600)})`


for(var i = 0; i < 200; i++) {
    var element = document.createElement('div');
    element.classList.add('little-star');
    element.style.top = ((Math.random() * 1000) % 300)  + "px";
    element.style.left = ((Math.random() * 1000) % 1000) + "px";
    document.querySelector('.nature-tree-container').append(element);
}
for(var i = 0; i < 200; i++) {
    var element = document.createElement('div');
    element.classList.add('little-star');
    element.style.top = ((Math.random() * 1000) % 300)  + "px";
    element.style.left = ((Math.random() * 1000) % 1000) + 700 + "px";
    document.querySelector('.nature-tree-container').append(element);
}