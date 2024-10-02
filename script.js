const body = document.body
body.style.display="flex"
body.style.justifyContent="center"
body.style.alignItems="center"
//create squares for game grid
const gameGrid = document.createElement('div')
gameGrid.setAttribute('style',
 'display: grid; height: 600px; width: 600px; grid-template-columns: repeat(30, 1fr); grid-template-rows: repeat(30, 1fr); border-style: solid; border-color: white;')
body.appendChild(gameGrid)

let gridSize = 1000;
const grid = (() => {
for (let z = 0; z < gridSize; z++) {
    let emptySquare = document.createElement('div') 
    emptySquare.classList.add('square')
    emptySquare.style.backgroundColor="blue"  
    gameGrid.appendChild(emptySquare)    
if (z==633) {
    let snakeSquare = document.createElement('div')
    snakeSquare.classList.add('snake-square')
    snakeSquare.style.backgroundColor="lime"  
    gameGrid.appendChild(snakeSquare)    
    
}

if (z==112) {
    let foodSquare = document.createElement('div')
    foodSquare.classList.add('food-square')
    foodSquare.style.backgroundColor="red"
    gameGrid.appendChild(foodSquare)
}
}
})()