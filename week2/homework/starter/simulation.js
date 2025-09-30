// TODO your DOM code goes here

// get all the DOM here
const boardElement = document.getElementById('board');
const stepButton = document.getElementById('step');
const resetButton = document.getElementById('reset');
const goButton = document.getElementById('go');
const pauseButton = document.getElementById('pause');
const randomButton = document.getElementById('random');

// 游戏状态
let board = [];
let intervalId = null;
const BOARD_SIZE = 25;

// 创建初始棋盘（黑白相间）
function createCheckerboard() {
    const newBoard = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        const row = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            row.push((i + j) % 2 === 0); // 黑白交替
        }
        newBoard.push(row);
    }
    return newBoard;
}

// 创建随机棋盘
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

// 渲染棋盘到DOM
function renderBoard() {
    boardElement.innerHTML = ''; // 清空棋盘
    
    // 创建25x25的单元格
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const cell = document.createElement('div');
            cell.className = `cell ${board[i][j] ? 'alive' : 'dead'}`;
            boardElement.appendChild(cell);
        }
    }
}

// 更新棋盘状态（不重新创建DOM）
function updateBoard() {
    const cells = boardElement.children;
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const index = i * BOARD_SIZE + j;
            cells[index].className = `cell ${board[i][j] ? 'alive' : 'dead'}`;
        }
    }
}

// 计算下一代
function stepSimulation() {
    board = stepBoard(board); // 调用conway.js中的函数
    updateBoard();
}

// 重置为初始状态
function resetSimulation() {
    stopSimulation();
    board = createCheckerboard();
    updateBoard();
}

// 开始自动运行
function startSimulation() {
    stopSimulation(); // 防止重复启动
    intervalId = setInterval(stepSimulation, 100); // 每100ms一步
}

// 停止自动运行
function stopSimulation() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// 随机生成棋盘
function randomizeBoard() {
    stopSimulation();
    board = createRandomBoard();
    updateBoard();
}

// 绑定按钮事件
stepButton.addEventListener('click', stepSimulation);
resetButton.addEventListener('click', resetSimulation);
goButton.addEventListener('click', startSimulation);
pauseButton.addEventListener('click', stopSimulation);
randomButton.addEventListener('click', randomizeBoard);

// 初始化游戏
board = createCheckerboard();

renderBoard();

// once you've replaced conway.js with your solution to the previous assignment
// this will print [[false, true, false], [false, true, false]]
console.log(
  stepBoard([
    [true, false, true],
    [false, false, true],
  ]),
);
