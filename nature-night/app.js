


for(var i = 0; i < 200; i++) {
    var element = document.createElement('div');
    element.classList.add('little-star');
    element.style.top = ((Math.random() * 1000) % 300)  + "px";
    element.style.left = ((Math.random() * 1000) % 1500) + "px";
    document.querySelector('.container').append(element);
}

for(var i = 0; i < 1; i++) {
    var element = document.createElement('div');
    element.classList.add('medium-star');
    element.style.top = ((Math.random() * 1000) % 100)  + "px";
    element.style.left = ((Math.random() * 2000) % 400) + "px";
    document.querySelector('.container').append(element);
}

