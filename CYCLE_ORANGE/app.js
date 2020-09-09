

const cycles = document.getElementsByClassName('cycle');



for(var _index = 0; _index < cycles.length; _index++){
    let cycle = cycles[_index];
    for(var i = 0; i < 24; i++) {
        let li = document.createElement('li');
        li.classList.add('stroke');
        // console.log('rotate' + '(' + i * 15 + 'deg)');
        li.style.transform = ('rotate' + '(' + i * 15 + 'deg)');
        cycle.appendChild(li);
    }
 }
