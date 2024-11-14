const GRIDSIDE = 600;
let squaresPerSide = 0;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width= sketchArea.style.height = `${GRIDSIDE}px`;
createDiv(); //This helps as a callback to start a sketch.

function setBackgroundColor(){
    this.style.backgroundColor = "black"
}

function createDiv(){
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) }px`;
    
    sketchArea.innerHTML = '';

    for(let i=0; i< numOfSquares; i++){
        const newDiv = document.createElement('div');
        
        newDiv.style.width = newDiv.style.height = widthOrHeight;
        newDiv.classList.add('cell');

        sketchArea.appendChild(newDiv);

        newDiv.addEventListener("mouseover", setBackgroundColor);
    }
}

const deleteBtn = document.querySelector('#delete-content');

deleteBtn.addEventListener('click', () =>{
    squaresPerSide = parseInt(prompt("Enter new number of squares per side:"), 10);

    if (!isNaN(squaresPerSide) && squaresPerSide > 0) {
        if(squaresPerSide > 100 || squaresPerSide < 0){
            return alert("Please enter a number between 1-100");
        }
        createDiv();
    } 
    else {
        alert("Please enter a valid number between 1-100");
    }
});