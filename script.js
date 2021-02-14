
var numberscoore = document.getElementById('numberscoore').textContent = 0

function scoore() {

    numberscoore++

    numberscoore = document.getElementById('numberscoore').textContent = numberscoore
}

function upgarde() {
    if(numberscoore === 30) {
        numberscoore = numberscoore +2
        numberscoore = document.getElementById('numberscoore').textContent = numberscoore
        console.log(numberscoore)

    }
}

function save() {
    localStorage.setItem('numberscoore', numberscoore)
}

(function load() {
    numberscoore = localStorage.getItem('numberscoore')

    numberscoore = document.getElementById('numberscoore').textContent = numberscoore

})()