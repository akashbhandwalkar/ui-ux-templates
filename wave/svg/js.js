var shape = document.querySelector('.text-wow');
if(shape.getTotalLength) {
    var length = shape.getTotalLength();
    console.log('length', length);
}
