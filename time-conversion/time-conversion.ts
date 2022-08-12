'use strict'

function timeConversion(s: string) {
    // Write your code here
    const timeArr = s.split(':')
    const period: string = timeArr[2].slice(2)
    timeArr[2] = timeArr[2].slice(0, 2)
    const hours: string = timeArr[0];
    const minutes: string = timeArr[1];
    const seconds: string = timeArr[2];
    let output: string = '';

    if (period === 'AM' && hours !== '12') {
        output = `${hours}:${minutes}:${seconds}`
    }

    if (period === 'AM' && hours === '12') {
        output = `00:${minutes}:${seconds}`
    }

    if (period === 'PM' && hours === '12') {
        output = `${hours}:${minutes}:${seconds}`
    }

    if (period === 'PM' && hours !== '12') {
        const afternoonHours = parseInt(hours) + 12
        output = `${afternoonHours}:${minutes}:${seconds}`
    }
    
    return output
}

function main() {
    const s: string = '12:00:00AM'

    const result: string = timeConversion(s);
    console.log(result);

}

main();
