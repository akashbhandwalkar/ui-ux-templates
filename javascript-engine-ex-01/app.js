
var result = document.getElementById('result');

result.innerHTML = 'loading';
for(var i = 0; i < 1000000; i++) {
    setTimeout(function() {
        result.innerHTML = i;
    }, 0)
    
}







