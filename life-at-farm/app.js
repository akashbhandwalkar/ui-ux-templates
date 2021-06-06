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


const beeContainers = document.getElementsByClassName('bee-container');
const beeCollection = document.querySelector('.bee-collection');
for(var i = 0; i< 5; i++) {
    var cln = beeContainers[0].cloneNode(true);
    cln.style.left = 200 + ((Math.random() * 1000) % 300) % 300 + 'px';
    cln.style.top = 200 +  ((Math.random() * 1000) % 300) % 300 + 'px';

    beeCollection.appendChild(cln);
}
 