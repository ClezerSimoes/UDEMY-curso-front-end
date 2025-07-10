// Read only, não permite modificar diretamente a listas ou tuplas

let num : readonly number[] = [30, 20, 40];

//num[0] = 40

let lista : readonly [string, number, string] = ["clezer", 28, "maior"];

//lista[2] = 30


const copia = num.map((item) => item*2);

console.log(num)
console.log(copia)