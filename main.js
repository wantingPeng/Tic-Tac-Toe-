//
const cellALL = document.querySelectorAll('[data-cell]')
const board =document.querySelector('[data-board]')
const message =document.querySelector('[data-message]')
const gameEnd =document.querySelector('.game-end')
const restartButton =document.querySelector('#restartButton')
restartButton
const WINNING_COMBINATIONS= [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let arrx=[];
let arro=[]
let flag=true

startGame()
function startGame(){
cellALL.forEach(cell=>{
  cell.classList.remove('x')
  cell.classList.remove('o')
  hover()
  cell.addEventListener('click',addXorO,{once:true})
})}

function addXorO(event){
  mark=flag?'x':'o'
 event.target.classList.add(mark)
/*  console.log(event.target.dataset.code) */
 if (mark=='x'){arrx.push(Number(event.target.dataset.code))
/*   console.log(arrx) */
 if (winOrLose(arrx)){return gameOVer('x')
}
 }
  else if(mark=='o') {arro.push(Number(event.target.dataset.code))
 /*    console.log(arro) */
    if (winOrLose(arro)){
      return gameOVer('o')}
  }
board.classList.remove(mark) 
 flag=!flag
 hover()
}
function gameOVer(who){
  message.textContent=`${who} wins!`
  gameEnd.style.display='flex'}

function hover(){
  mark=flag?'x':'o'
board.classList.add(mark)
}

 function winOrLose(arr){
  return WINNING_COMBINATIONS.some(combination=>{return combination.every(num=>arr.includes(num))
  })
} 

restartButton.addEventListener('click', restart)
function restart(){
 gameEnd.style.display='none'
 
 startGame()

}