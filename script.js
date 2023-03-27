'use strict'

let score = 20
let secretNumber = Math.trunc(Math.random() * 20) + 1

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  //When there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No number'
    document.querySelector('.guess').style.border = '2px solid red'
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number'
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').style.width = '40rem'
    document.querySelector('.number').textContent = secretNumber
    //when guess is greater than secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High 😉'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 🧐'
      document.querySelector('.score').textContent = 0
    }
    //when guess is less than secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low 😉'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 🧐'
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', () => {
  score = 20
  let secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.message').textContent = 'Guess Between 1 and 20'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.guess').value = ''
})
