const options = ["rock", "paper", "scissors"]
let playerChoice = '';
const playerPick = document.querySelector('.userPlayer')
const cpuPick = document.querySelector('.cpu')
const rockImg = './images/rock.svg';
const paperImg = './images/paper.svg';
const scissorsImg = './images/scissors.svg';
const resultDisplay = document.querySelector('.result-display')

function getCpuChoice(){
  const choice = options[Math.floor(Math.random() * options.length)]
  cpuPick.src = `./images/${choice}.svg`
  return choice
}


function handleRock(){
  console.log(`You picked ${rock.id}`)
  playerChoice = rock.id
  compare(playerChoice)
}

function handlePaper(){
  console.log(`You picked ${paper.id}`)
  playerChoice = paper.id
  compare(playerChoice)
}

function handleScissors(){
  console.log(`You picked ${scissors.id}`)
  playerChoice = scissors.id  
  compare(playerChoice)
}

ReactDOM.render((
  <>
    <div className="header">
      <h1>Let's Play Rock Paper Scissors!</h1>
    </div>
    <ul className="options">
      <li><img  className="choice" src="./images/rock.svg" alt="rock" id="rock" onClick={handleRock}/></li>
      <li><img src="./images/paper.svg" alt="" className="choice"  id="paper" onClick={handlePaper}/></li>
      <li><img src="./images/scissors.svg" alt="" className="choice"  id="scissors" onClick={handleScissors}/></li>
    </ul>
  </>
), document.querySelector('#root'))

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

function compare(userChoice, cpuChoice){
  cpuPick.classList.add('cpu_visible')
  playerPick.classList.add('cpu_visible')
  playerPick.src = `./images/${userChoice}.svg`;
  cpuChoice = getCpuChoice()
  if (userChoice === cpuChoice){
    resultDisplay.textContent = "Draw!"
  } else if (userChoice === 'rock'){
    if( cpuChoice === 'paper'){
      resultDisplay.textContent = "CPU Wins :("
      } 
      else {
      resultDisplay.textContent = "You Win!"
    }
  } else if (userChoice === 'paper'){
    if (cpuChoice === 'rock'){
      resultDisplay.textContent = "You Win!"
    } else {
      resultDisplay.textContent = "CPU Wins :("
    }
  } else if (userChoice === 'scissors') {
    if (cpuChoice === 'rock'){
      resultDisplay.textContent = "CPU Wins :("
    } else {
      resultDisplay.textContent = "You Win!"
    }
  }
}

resultDisplay.textContent = "Click to Play!"