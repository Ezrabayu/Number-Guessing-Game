let randomNumber = Math.floor(Math.random() * 100) + 1

let attempts = 0

// get element html
const guessInput = document.getElementById('guessInput')
const guessButton = document.getElementById('guessButton')
const message = document.getElementById('message')
const restartButton = document.getElementById('restartButton')

function checkGuess() {
    const userGuess = Number(guessInput.value)
    // after check user guess, attempts
    attempts++

    if(userGuess === randomNumber) {
        message.textContent = `Congratulations! You Guessed the Number ${randomNumber} Correctly in ${attempts} Attempts.`
        message.style.color = '#23a745'
        endGame()
    } else if (userGuess > randomNumber) {
        message.textContent = "Too High! Try Again."
        message.style.color = "#dc3545"
    } else if (userGuess < randomNumber) {
        message.textContent = "Too Low! Try Again."
        message.style.color = "#dc3545"
    }
    
    guessInput = ''
    guessInput.focus()
}

// function endgame
function endGame() {
    guessInput.disabled = true
    guessButton.disabled = true
    restartButton.style.display = 'inline'
}

function resetGame() {
    attempts = 0
    randomNumber = Math.floor(Math.random() *100) + 1
    guessInput.disabled = false
    guessButton.disabled = false
    message.textContent = 'Good Luck! Start Guessing . . .'
    message.style.color = '#333333'
    restartButton.style.display = 'none'
    guessInput.value = ''
    guessInput.focus()
}

guessButton.addEventListener('click', checkGuess)

restartButton.addEventListener('click', resetGame)

guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess()
    }
})