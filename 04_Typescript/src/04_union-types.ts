let lista= ["1", "2", 3, 4]

export function totalize(values: (number | string) []) { // Retornar total
    return values
        .map(value => typeof value === 'number' ? value : parseFloat(value))
        .filter(value => !isNaN(value))
        .reduce((acc, curr) => acc + curr, 0);
}

console.log(totalize(lista))