

// DOM elements
var submit = document.getElementById('submit-button');
var input = document.getElementById('input');
var bars = document.getElementsByClassName('bar');
var error = document.getElementById('error-message');
// Event Handlers

submit.addEventListener('click', handleSubmit);


// handlers

function handleSubmit() {
    if(input.value < 0 || input.value > 99) {
        showErrorMessage();
        return;
    }

    for(var i = 0; i < bars.length; i++) {
        bars[i].setAttribute("style", `width: ${input.value}%`);
    }
}

function showErrorMessage() {
    error.innerText = "Please select Range between 0 - 100";
    setTimeout(removeError, 3000);
}

function removeError() {
    error.innerText = "";

}