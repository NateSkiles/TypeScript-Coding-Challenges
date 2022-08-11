'use strict';

/*
 * Complete the 'miniMaxSum' function below.
 *
 * Generate an array of 5 positive integers, find the minimum and maximum values that can 
 * be calculated by summing exactly four of the five integers. Then print the respective 
 * minimum and maximum values.
 * 
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): string {
    // Write your code here
    const minArr: number[] = [...arr].sort((a, b) => a - b)
    const maxArr: number[] = [...arr].sort((a, b) => b - a)
    minArr.pop()
    maxArr.pop()

    const minSum: number = minArr.reduce((sum, n) => sum + n, 0)
    const maxSum: number = maxArr.reduce((sum, n) => sum + n, 0)

    const output:string = `${minSum} ${maxSum}`;

    return output;

}

function main() {
    // Generate random number array.
    const randomNum = () => {
        return Math.floor(Math.random() * 101)
    }
    const arr: number[] = [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()]

    console.log(`Random array: ${arr}\n\n Min & Max: ${miniMaxSum(arr)}`);
}

main()