//hover
const cellALL = document.querySelectorAll('[data-cell]')
const board =document.querySelector('[data-board]')
console.log(cellALL)
let flag=true
cellALL.forEach(cell=>{
  hover()
  cell.addEventListener('click',addXorO,{once:true})

})
function addXorO(event){
  mark=flag?'x':'o'
 event.target.classList.add(mark)
  board.classList.remove(mark) 
 flag=!flag
 hover()
}

function hover(){
  mark=flag?'x':'o'
board.classList.add(mark)

}