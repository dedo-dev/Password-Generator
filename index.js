const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]
const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')
const getPasswordBtn = document.getElementById('get-password-btn')
let randomPasswordOne = ''
let randomPasswordTwo = ''

// INPUT RANGE
const rangeEl = document.getElementById('range-el')
const rangeValue = document.getElementById('range-value')
let passwordLength = rangeEl.value
rangeEl.addEventListener('input', (e) => {
        rangeValue.textContent = e.target.value
        passwordLength = rangeEl.value
    }
)
rangeValue.textContent = rangeEl.value

getPasswordBtn.addEventListener('click', () => {
    getCharacters()
    randomPasswordOne = ''
    randomPasswordTwo = ''
})

function random(arr) {
    return Math.floor(Math.random() * arr.length)
}

function getCharacters() {
    for(let i = 0; i < passwordLength; i++) {
        randomPasswordOne += characters[random(characters)]
        randomPasswordTwo += characters[random(characters)]
    }
    passwordOne.textContent = randomPasswordOne
    passwordTwo.textContent = randomPasswordTwo
}

function globalForLoop(loop) {
    for(let i = 0; i < loop.length; i++) {
        return loop[i]
        // console.log(loop[i])
    }
}

const numbersEl = document.getElementById('numbers-el')
const charsetEl = document.getElementById('charset-el')

// function removeNum() {
//     let caratteriDisponibili = [...characters]
//     if(numbersEl.checked) {
//         caratteriDisponibili = caratteriDisponibili.filter(num => !'0123456789'.includes(num))
//     }
//     console.log(caratteriDisponibili)
// }
let password = ''
function removeNum() {
    let numbers = '0123456789'
    let newChartset = [...characters]
    if(numbersEl.checked) {
        newChartset = characters.filter(num => !numbers.includes(num))
    }
    password = newChartset
    console.log(newChartset)
}


function removeChart() {
    let specialChartset = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
    if(charsetEl.checked) {
        newChartset = characters.filter(spec => !specialChartset.includes(spec))
    }
    password = newChartset
    console.log(newChartset)

}

numbersEl.addEventListener('change', removeNum)
charsetEl.addEventListener('change', removeChart)