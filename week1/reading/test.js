console.log("script import Correctly!");


let list = [-2, 3, 1, 24, -8, -9, 10];

let list2 = [1, 2, 3, 4, 5, 6];


function evenIdxPositiveSum(list){
    console.log("==============================================");
    console.log("Function evenIdxPositiveSum start");
    console.log("list content:" + list);
    let value = 0;
    for(let i = 0; i<list.length; i++){
        if((i%2 === 0)&&(list[i]>0)){
            console.log("Target Value: " + list[i]);
            value += list[i];
        }
    }
    console.log("Value: " + value);
    console.log("Function evenIdxPositiveSum Ends");
    console.log("==============================================");
}

function filterer(list, boolean){
    console.log("==============================================");
    console.log("Function filterer start:");
    console.log("Input list:" + list);




    console.log("==============================================");
}


evenIdxPositiveSum(list);

filterer(list2, true);