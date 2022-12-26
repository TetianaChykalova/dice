const btnOpenRules = document.querySelector('#rules');
const btnModalRules = document.querySelector('#rules-close')

btnOpenRules.addEventListener('click', function() {
    document.querySelector('.modal').classList.add('visible')
})

btnModalRules.addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('visible')
})