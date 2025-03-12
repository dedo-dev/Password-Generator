const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]
let newCharactersArr = [...characters]
const rangeEl = document.getElementById('range-el')
const rangeValue = document.getElementById('range-value')
const numbersEl = document.getElementById('numbers-el')
const charsetEl = document.getElementById('charset-el')
const getPasswordBtn = document.getElementById('get-password-btn')
const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')
let passwordLength = rangeEl.value
let randomPasswordOne = ''
let randomPasswordTwo = ''

rangeEl.addEventListener('input', (e) => {
        rangeValue.textContent = e.target.value
        passwordLength = rangeEl.value
    }
)

rangeValue.textContent = rangeEl.value

numbersEl.addEventListener('change', remNum)
charsetEl.addEventListener('change', remCha)
getPasswordBtn.addEventListener('click', renderPasswords)

function random(arr) {
    return Math.floor(Math.random() * arr.length)
}

function renderPasswords() {
    getCharacters()
    randomPasswordOne = ''
    randomPasswordTwo = ''
}

function remNum() {
    if(numbersEl.checked) {
        let numbers = '0123456789'
        newCharactersArr = newCharactersArr.filter(num => !numbers.includes(num))
    } else {
        newCharactersArr = [...characters]
        if(charsetEl.checked) {
            remCha()
        }
    }
}

function remCha() {
    if(charsetEl.checked) {
        let specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
        newCharactersArr = newCharactersArr.filter(spec => !specialCharacters.includes(spec))
    } else {
        newCharactersArr = [...characters]
        if(numbersEl.checked) {
            remNum()
        }
    }
}

function getCharacters() {
    remNum()
    remCha()
    for(let i = 0; i < passwordLength; i++) {
        randomPasswordOne += newCharactersArr[random(newCharactersArr)]
        randomPasswordTwo += newCharactersArr[random(newCharactersArr)]
    }
    passwordOne.textContent = randomPasswordOne
    passwordTwo.textContent = randomPasswordTwo
}