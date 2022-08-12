/*
 * Complete the 'plusMinus' function below.
 *
 * Given an array of integers, calculate the ratios of its elements that are positive, 
 * negative, and zero. Print the decimal value of each fraction on a new line with  
 * 6 places after the decimal.
 * 
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): string {
    // Write your code here
    const l: number = arr.length
    const posArr: number[] = [];
    const negArr: number[] = [];
    const zerosArr: number[] = [];
    
    
    arr.forEach((num: number) => {
        if (num > 0) {
            posArr.push(num);
        }
        if (num < 0) {
            negArr.push(num);
        }
        if (num === 0) {
            zerosArr.push(num);
        }
    });
    
    const posRatio: string = (posArr.length / l).toPrecision(6);
    const negRatio: string = (negArr.length / l).toPrecision(6);
    const zeroRatio: string = (zerosArr.length / l).toPrecision(6);
    
    const output: string = `Positive: ${posRatio}\nNegative: ${negRatio}\n Zero: ${zeroRatio}`

    return output;
}

function main() {
    const arr1: number[] = [-1, -1, 0, 0, 0, 1];
    const arr2: number[] = [0, -1, 0, 1, 0, 1, 0 ,0, -1];
    const arr3: number[] = [1, 1, 0, -1, 0, 1, 1];

    console.log(plusMinus(arr1));
    console.log(plusMinus(arr2));
    console.log(plusMinus(arr3));
}

main()