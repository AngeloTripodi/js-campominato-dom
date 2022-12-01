const mainElement = document.querySelector('main');
const squareContainer = document.querySelector('.grid');
const playButtonElement = document.getElementById('playButton')
const bombList = [];

function getSquare(elm, cls, prn, clicked, listOne, listTwo){
    const newSquare = document.createElement(elm);
    newSquare.classList.add(cls);
    prn.appendChild(newSquare);
    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle(clicked)
        console.log(parseInt(newSquare.innerText));
        if (listOne.includes(listTwo)) {
            console.log('hai perso')
        }
    });
    return newSquare;
    
}

function randomNumber(numMax, numMin){
        const randomNumbers = Math.floor (Math.random () * (numMax - numMin + 1) + numMin);
        return randomNumbers;
    }

function getBomb (list, min, max){
    let bombExist = false;
    let randomNumberBomb;

    while (bombExist === false) {
        randomNumberBomb = randomNumber(min,max);

        if (!list.includes(randomNumberBomb)) {
            bombExist = true;
        }
    }
    return randomNumberBomb;
}



console.log(playButtonElement)

playButtonElement.addEventListener('click', function(){

    mainElement.classList.toggle('d-none');
    // utilizzo innterHTML vuoto per resettare la griglia ad ogni click
    squareContainer.innerHTML= "";

    for( let i = 0; i < 16; i++){
        bombList.push(getBomb(bombList, 1, 100))
        console.log(bombList)
    }

    for (let i=1; i<=100; i++){
        const createNewSquare = getSquare('div', 'square', squareContainer, 'clicked', createNewSquare[i], bombList[i]);
        createNewSquare.classList.add('d-flex');
        createNewSquare.innerHTML =`<span class="m-auto"> ${[i]} <span>`;
    }

    
});




// ! Al posto di innerHTML vuoto per disabilitare il click e farlo utilizzare solo una volta 
// }, {once:true} );
