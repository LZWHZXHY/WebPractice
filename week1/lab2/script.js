let testBoard = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

function subDiagonals(board, rowPosition, colPosition){
    console.log("Board Content: ", board);

    //get board size
    const rowNumber = board.length;
    const colNumber = board[0].length;


    let sum = 0;

    //try to get all neighbors
    for(let dr = (rowPosition - 1); dr <= (rowPosition + 1); dr++){
        //console.log("current row: ", dr);
        //console.log("current value: ", board[dr][colPosition])
        for(let dc = (colPosition -1); dc <= (colPosition + 1); dc++){
            
            if (dr < 0 || dr >= rowNumber || dc < 0 || dc >= colNumber) {
                continue;
            }

            if((dc === colPosition)&&(dr===rowPosition)||(dr === (rowPosition - 1)&&(dc === colPosition))||(dr === (rowPosition + 1)&&(dc === colPosition))||(dr === rowPosition&&(dc === (colPosition - 1)))||(dr === rowPosition&&(dc === (colPosition + 1)))){
                continue;
            }else{
                console.log("current value: ", board[dr][dc])
                sum += board[dr][dc];
            }
            
            
        }
        
    }

    console.log("sum: ", sum);


}


subDiagonals(testBoard, 1 ,2);
subDiagonals(testBoard, 0 ,0);


function copyInc(board){

    console.log("init board: ", board);

    //get board size
    const rowNumber = board.length;
    const colNumber = board[0].length;

    const newBoard = [];

    for(let i = 0; i <= rowNumber; i++){
        for(let j = 0; j <= colNumber; j++){
            console.log("current value: ", board[i][j]);
            board[i][j] = board[i][j] + 1;
            newBoard.push(board[i][j]);
        }
    }

    console.log("new board: ", newBoard);
}

copyInc(testBoard);