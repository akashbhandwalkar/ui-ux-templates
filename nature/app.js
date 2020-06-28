


for(var i = 0; i < 20; i++) {
    var element = document.createElement('div');
    element.classList.add('little-star');
    element.style.top = ((Math.random() * 1000) % 600)  + "px";
    element.style.left = ((Math.random() * 1000) % 1500) + "px";
    document.querySelector('body').append(element);
}

for(var i = 0; i < 20; i++) {
    var element = document.createElement('div');
    element.classList.add('medium-star');
    element.style.top = ((Math.random() * 1000) % 600)  + "px";
    element.style.left = ((Math.random() * 2000) % 1500) + "px";
    document.querySelector('body').append(element);
}

