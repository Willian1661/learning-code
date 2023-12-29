const cellElements = document.querySelectorAll('[data-cell]')
const board = document.querySelector('[data-board]')
const winningMessageTextElemet = document.querySelector('[data-winningMessageText]');
const winningMessages = document.querySelector("[data-winningMessage]");
const restartButton = document.querySelector("[data-restart-button]");

let istCircleTurn;

const winningCombination = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [3, 4, 5], [1, 4, 7], [2, 4, 6],
    [6, 7, 8], [2, 5, 8],

];

const startGame = () => {
    istCircleTurn = false;

    for (const cell of cellElements) {
        cell.classList.remove('O');
        cell.classList.remove('X');
        cell.removeEventListener("click", handleClick)
        cell.addEventListener('click', handleClick, { once: true });
    }

    setBoardHoverClass();
    winningMessages.classList.remove("show-winning-message");
};
//empate nao funciona 
const endGame = (isDraw) => {
    if (isDraw) {
        winningMessageTextElemet.innerText = "Empate!";
    } else {

        winningMessageTextElemet.innerText = istCircleTurn ? "O VEnceu!" : "X Venceu!";
    }
    winningMessages.classList.add("show-winning-message");
};


const checkForWin = (currentPlayer) => {
    return winningCombination.some(Composition => {
        return Composition.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains("X") || cell.classList.contains("O");
    });
}

const setBoardHoverClass = () => {
    board.classList.remove('O');
    board.classList.remove('X');

    if (istCircleTurn) {
        board.classList.add('O');
    } else {
        board.classList.add('X');

    }
}

let placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}
const swapTurns = () => {
    istCircleTurn = !istCircleTurn;

    setBoardHoverClass();
    /*  board.classList.remove('O');
     board.classList.remove('X');
 
     if (istCircleTurn) {
         board.classList.add('O');
     }else{
         board.classList.add('X');
 
     } */
};

const handleClick = (e) => {
    // colocar a marca X ou O
    const cell = e.target;
    const classToAdd = istCircleTurn ? 'O' : 'X';

    placeMark(cell, classToAdd);

    //verificar por vitoria 
    const isWin = checkForWin(classToAdd);

    //verificar por empates
    const isDraw = checkForDraw();
    if (isWin) {
        endGame(false);
        console.log("winner");
    } else if (isDraw) {
        endGame(true)
    } else {
        //mudar simbolo
        swapTurns();
    }
};
startGame();
restartButton.addEventListener('click', startGame)