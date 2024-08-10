//click=>show X,then click show O,switch the 
const cellALL = document.querySelectorAll('[data-cell]')
console.log(cellALL)
let flag=true
cellALL.forEach(cell=>{
  cell.addEventListener('click',addXorO)
})
function addXorO(event){
  mark=flag?'x':'o'
 event.target.classList.add(mark)
 flag=!flag
console.log(flag)

}