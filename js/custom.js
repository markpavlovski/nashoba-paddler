document.addEventListener("mousemove",(event)=>{
  if (event.target.closest(".rates-right p")) {
    let rowCells = document.querySelectorAll(".rates-right p")
    for (let i =0; i< rowCells.length; i++){
      if (rowCells[i].id !== "" && rowCells[i].id === event.target.closest("p").id ){
        rowCells[i].classList.add("hover-right")
      } else {
        rowCells[i].classList.remove("hover-right")
      }
    }
  } else {
    let rowCells = document.querySelectorAll(".rates-right p")
    for (let i =0; i< rowCells.length; i++){
        rowCells[i].classList.remove("hover-right")
    }
  }
})


document.addEventListener("mousemove",(event)=>{
  console.log("nice")
  if (event.target.closest(".rates-left p")) {
    console.log("yeah")
    let rowCells = document.querySelectorAll(".rates-left p")
    console.log(rowCells);
    for (let i =0; i< rowCells.length; i++){
      if (rowCells[i].id !== "" && rowCells[i].id === event.target.closest("p").id ){
        rowCells[i].classList.add("hover-left")
      } else {
        rowCells[i].classList.remove("hover-left")
      }
    }
  } else {
    let rowCells = document.querySelectorAll(".rates-left p")
    for (let i =0; i< rowCells.length; i++){
        rowCells[i].classList.remove("hover-left")
    }
  }
})
