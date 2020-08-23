
for(var i = 0; i < 100; i++) {
    var element = document.createElement('div');
    element.classList.add('little-star');
    element.style.top = ((Math.random() * 1000) % 300)  + "px";
    element.style.left = ((Math.random() * 1000) % 600) + "px";
    document.querySelector('.nature-tree-container').append(element);
}