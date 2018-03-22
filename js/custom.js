document.addEventListener("mousemove",(event)=>{
  if (event.target.closest(".rates-right p") || event.target.closest(".rates-left p")) {
    let rowCells = document.querySelectorAll(".rates-right p")
    let rowCellsLeft = document.querySelectorAll(".rates-left p")
    for (let i =0; i< rowCells.length; i++){
      if (rowCells[i].id !== "" && rowCells[i].id === event.target.closest("p").id ){
        rowCells[i].classList.add("hover-right")
      } else {
        rowCells[i].classList.remove("hover-right")
      }
    }
  } else {
    let rowCells = document.querySelectorAll("p")
    for (let i =0; i< rowCells.length; i++){
        rowCells[i].classList.remove("hover-right")
    }
  }
})
