//click=>show X
const cellALL = document.querySelectorAll('[data-cell]')
console.log(cellALL)
cellALL.forEach(cell=>{
  cell.addEventListener('click',addXorO)
})
function addXorO(event){
  return event.target.classList.add('x')
}