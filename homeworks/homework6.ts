let numbersColums = [1,2,3,4,5];
let numbersFils = [1,2,3,4,5]

for ( let i = 0; i < numbersColums.length; i++) {
    let line = ''; 

    for (let j = 0; j < numbersFils.length; j++) {
        line += ' ' + (numbersColums[i] * numbersFils[j]);
    }
    console.log (line);

}


