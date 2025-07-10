let programmer = {
    name: "Clezer",
    age: 28
}

export function showProgrammer(prog : {name: string, age: number}) {
    console.log(prog.name)
    console.log(prog.age)
}

showProgrammer(programmer)
