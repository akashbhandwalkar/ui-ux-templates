
const good = document.querySelector('.button-wrapper')
const bad = document.querySelector('.bad-button-wrapper')

good.addEventListener('click', () => {
    good.classList.toggle('active')
})


bad.addEventListener('click', () => {
    bad.classList.toggle('active')
})