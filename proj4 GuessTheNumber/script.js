let randNum = (parseInt(Math.random()*100 +1))
console.log('random ',randNum);

const userInput =document.querySelector('#guessField')
const submit =document.querySelector('#subt')
const guessSlot= document.querySelector('.guesses')
const remaining= document.querySelector('.lastresult')
const lowOrHI= document.querySelector('.loworhi')
const startOver= document.querySelector('.resultParas')

const p= document.createElement('p')

let prevGuess=[]
let numGuess= 1;    //abhi phle bari di hai guess krne ke liye

let playGame= true

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault() //submit hone s roka
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

//check values is b/w 1 and 100 
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter valid number')
    }
    else  if(guess <1){
        alert('please enter number greater than 0')
    } 
    else  if(guess >100){
        alert('please enter number less than 101')
    }
    else{
        prevGuess.push(guess)
        if (numGuess >10) {
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${randNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// mtlb msg print hoga
//values guess val ke equal hai,km hai,jada hai
function checkGuess(guess){
    if(guess === randNum){
        displayMessage(`you guesses it right`)
        endGame()

    }
    else if(guess <randNum){
        displayMessage(`Number is Too low`)
    }
    else if(guess > randNum){
        displayMessage(`Number is Too high`)
    }
}

// values clean for next i/p, arr update
function displayGuess(guess){
    userInput.value=''
    remaining.innerHTML = ` ${10- numGuess} `
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    
}


function displayMessage(message){
lowOrHI.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newgame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame=false
    newGame()

}

function newGame(){
   const newGameButton = document.querySelector('#newgame')
   newGameButton.addEventListener('click',function(e){
    randNum = parseInt(Math.random()*100 +1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML= `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
   })
}


