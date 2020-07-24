

let seconds = 21;
const dom = document.querySelector('.current');

setInterval( function() {
    dom.innerHTML = 1 + ":" + seconds;
    seconds++; 

    if(seconds < 21) {
        seconds = 21;
    }
  }, 1000);
