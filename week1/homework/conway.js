//1.Any live cell with exactly two or three live neighbors remains alive.
//2.Any dead cell with exactly three live neighbors becomes a live cell
//3.All other live cells die in the next generation. Similarly, all other dead cells stay dead.


function stepBoard(board){
    if(board.length === 0 || board[0].length === 0){
        return board;
    }

    //get board size.
    const rowNumber = board.length;            
    const colNumber = board[0].length;

    const newBoard = [];

    for(let row = 0; row < rowNumber; row++){
        const newRow = [];
        for(let col = 0; col < colNumber; col++){
            let liveNeighbors = 0;
            // count neighbors
            for(let dr = -1; dr <= 1; dr++){
                for(let dc = -1; dc <= 1; dc++){
                    if(dr === 0 && dc === 0){
                        continue; 
                    } 
                    const neighborRow = row + dr;
                    const neighborCol = col + dc;
                    if(neighborRow >= 0 && neighborRow < rowNumber && neighborCol >= 0 && neighborCol < colNumber){
                        if(board[neighborRow][neighborCol]){
                            liveNeighbors++;
                        }
                    }
                }
            }
           
            const isAlive = board[row][col];
            let nextCell = false;
            if(isAlive){
                if((liveNeighbors === 2)|| (liveNeighbors === 3)){
                    nextCell = true;
                }
            }else{
               if(liveNeighbors === 3){
                nextCell = true;
               }
            }
            newRow.push(nextCell);
        }
        newBoard.push(newRow);
    }
    return newBoard;
}