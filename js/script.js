const mainElement = document.querySelector('main');
const squareContainer = document.querySelector('.grid');
const playButtonElement = document.getElementById('playButton');
const scoreBoardElement = document.getElementById('scoreboard');
const bombList = [];
let score = 0;

function getSquare(elm, cls, prn){
    const newSquare = document.createElement(elm);
    newSquare.classList.add(cls);
    prn.appendChild(newSquare);
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
    const bombList = [];
    mainElement.classList.toggle('d-none');
    // utilizzo innterHTML vuoto per resettare la griglia ad ogni click
    squareContainer.innerHTML= "";

    for( let i = 0; i < 16; i++){
        bombList.push(getBomb(bombList, 1, 100))
        console.log(bombList)
    }

    for (let i=1; i<=100; i++){
        const createNewSquare = getSquare('div', 'square', squareContainer);
        createNewSquare.classList.add('d-flex');
        // createNewSquare.innerHTML =`<span class="m-auto"> ${[i]} <span>`;
       

        createNewSquare.addEventListener('click', function(){

            createNewSquare.classList.add('clicked')
            console.log(i)
            console.log(bombList)

            while(bombList.includes(i)) {
                alert('BOMBA PRESA! HAI PERSO, AGGIORNA LA PAGINA PER FARE UNA NUOVA PARTITA!');
            }
                score++;
                console.log(score);
                scoreBoardElement.innerHTML=score;
                console.log(i)
                if(score === 84){
                    scoreBoardElement.innerHTML="HAI VINTO!";
                    alert('CONGRATULAZIONI, HAI VINTO!!!');
                } 
        }, {once:true});   
    }  
});




// ! Al posto di innerHTML vuoto per disabilitare il click e farlo utilizzare solo una volta 
// }, {once:true} );
