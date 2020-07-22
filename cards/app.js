var seconds = 0, minutes = 0;
var timer = document.querySelector('#timer');
setInterval(function(){
    seconds++;
    timer.innerHTML = (minutes < 9 ? "0" + minutes : minutes) + ":" + (seconds < 9 ? "0" + seconds : seconds);
}, 1000)
