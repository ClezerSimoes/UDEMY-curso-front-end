type programmer = {
    name: string, 
    age: number,
    skills?: string[],
    contact: {email: string, phone: string}
    salary?: number | string
}

export function showProgrammer(prog : programmer) {
    console.log(prog)
}

showProgrammer({
    name: "clezer",
    age: 28,
    skills: ["javascript, typescript"],
    contact: {email: "clezer@email.com", phone: "9 9999 - 9999"}
})
