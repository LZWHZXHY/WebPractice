// TODO your DOM code goes here

// get all the DOM here
const boardElement = document.getElementById('board');
const stepButton = document.getElementById('step');
const resetButton = document.getElementById('reset');
const goButton = document.getElementById('go');
const pauseButton = document.getElementById('pause');
const randomButton = document.getElementById('random');

// game initial
let board = [];
let intervalId = null;
const BOARD_SIZE = 25;

// create the board
function createStartBoard() {
    const newBoard = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        const row = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            row.push((i + j) % 2 === 0); 
        }
        newBoard.push(row);
    }
    return newBoard;
}

// randomBoard
function createRandomBoard() {
    const newBoard = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        const row = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            row.push(Math.random() > 0.5); // 50%概率存活
        }
        newBoard.push(row);
    }
    return newBoard;
}


function renderBoard() {
    while (boardElement.firstChild) {
        boardElement.removeChild(boardElement.firstChild);
    }

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const cell = document.createElement('div');
            cell.className = `cell ${board[i][j] ? 'alive' : 'dead'}`;
            boardElement.appendChild(cell);
        }
    }
}


function updateBoard() {
    const cells = boardElement.children;
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const index = i * BOARD_SIZE + j;
            cells[index].className = `cell ${board[i][j] ? 'alive' : 'dead'}`;
        }
    }
}


function stepSimulation() {
    board = stepBoard(board); 
    updateBoard();
}


function resetSimulation() {
    stopSimulation();
    board = createStartBoard();
    updateBoard();
}


function startSimulation() {
    stopSimulation(); 
    intervalId = setInterval(stepSimulation, 100); 
}


function stopSimulation() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}


function randomizeBoard() {
    stopSimulation();
    board = createRandomBoard();
    updateBoard();
}


stepButton.addEventListener('click', stepSimulation);
resetButton.addEventListener('click', resetSimulation);
goButton.addEventListener('click', startSimulation);
pauseButton.addEventListener('click', stopSimulation);
randomButton.addEventListener('click', randomizeBoard);


board = createStartBoard();

renderBoard();

// once you've replaced conway.js with your solution to the previous assignment
// this will print [[false, true, false], [false, true, false]]
console.log(
  stepBoard([
    [true, false, true],
    [false, false, true],
  ]),
);
