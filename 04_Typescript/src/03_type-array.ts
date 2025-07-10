let films: string[] = ["Duna", "harry Potter", "O Senhor dos Aneis"];

let numbers: number[] = [ 10, 20, 30]

export function toUpperCaseStrings(arr: string[]){
    return arr.map(value => value.toUpperCase())
}

export function toUpperFixedNumbers(arr: number[]){
    return arr.map(value => value.toFixed(2))
}


console.log(toUpperCaseStrings(films))
console.log(toUpperFixedNumbers(numbers))