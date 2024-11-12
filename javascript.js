function createDiv(num){
    const container = document.getElementById('container');
    
    for(let i=0; i< num; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('styled-div')
        container.appendChild(newDiv);
    }
}

createDiv(100)