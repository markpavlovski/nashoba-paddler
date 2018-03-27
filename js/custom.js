


document.querySelector("nav").innerHTML += `
  <div class="main-nav">
    <ul>
      <li id="rentals">
        RENTALS
      </li>
      <li>
        TOURS
      </li>
      <li>
        INSTRUCTIONS
      </li>
      <li>
        RIVER CAMP
      </li>
      <li>
        RIVER CLASSROOM
      </li>
      <li>
        DIRECTIONS
      </li>
    </ul>
  </div>

`









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
  if (event.target.closest(".rates-left p")) {
    let rowCells = document.querySelectorAll(".rates-left p")
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



document.addEventListener("mousemove",(event)=>{
  if (event.target.closest(".offsite p")) {
    let rowCells = document.querySelectorAll(".offsite p")
    for (let i =0; i< rowCells.length; i++){
      if (rowCells[i].id !== "" && rowCells[i].id === event.target.closest("p").id ){
        rowCells[i].classList.add("hover-offsite")
      } else {
        rowCells[i].classList.remove("hover-offsite")
      }
    }
  } else {
    let rowCells = document.querySelectorAll(".offsite p")
    for (let i =0; i< rowCells.length; i++){
        rowCells[i].classList.remove("hover-offsite")
    }
  }
})

let rentals = document.querySelector("#rentals")
let tick = document.querySelector(".tick")
tick.style.left = `${rentals.getBoundingClientRect().x + rentals.getBoundingClientRect().width/2-10}px`

window.addEventListener("resize", (event)=>{
let rentals = document.querySelector("#rentals")
let tick = document.querySelector(".tick")
tick.style.left = `${rentals.getBoundingClientRect().x + rentals.getBoundingClientRect().width/2-10}px`
})
