
// dom
var goolgeBtn = document.getElementById('google-signin');
var seconForm = document.getElementsByClassName('second-form')[0];

// events

goolgeBtn.addEventListener('click', showForm)

// handlers

function  showForm(event) {
    console.log('event');
    seconForm.style.display = 'block';
}
