// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener
    ('click', makeBlue)
    dots[i].addEventListener
    ('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  evt.target.classList.remove("blue", "invisible")
  console.log(updateCounts())
  
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  evt.preventDefault()
  evt.target.classList.toggle ('blue')
  evt.target.classList.remove("green", "invisible")
  console.log(updateCounts())
}


// CREATE FUNCTION hide HERE

function hide (evt) {
  evt.target.classList.toggle ('invisible')
  evt.target.classList.remove("blue", "green")
  console.log(updateCounts())
}

function updateCounts () {
  var totals = {
    blue: document.getElementsByClassName('blue').length,
    green: document.getElementsByClassName('green').length,
    invisible: document.getElementsByClassName('invisible').length,
  }
  displayTotals(totals)

   // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  // Once you've done the counting, this function will update the display
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
