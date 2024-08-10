//hover
const cellALL = document.querySelectorAll('[data-cell]')
const board =document.querySelector('[data-board]')
console.log(cellALL)
let flag=true
cellALL.forEach(cell=>{

  cell.addEventListener('click',addXorO)
})
function addXorO(event){
  mark=flag?'x':'o'
 event.target.classList.add(mark)
 board.classList.remove(mark)
 flag=!flag
console.log(flag)
mark=flag?'x':'o'
board.classList.add(mark)
}