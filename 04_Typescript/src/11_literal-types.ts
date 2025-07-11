type LogType = "info" | "warn" | "error";

export function logger(type: LogType, message: string){
    switch(type){
        case 'info':
            console.log(`Info: ${message}`)
            break;
        case 'warn':
            console.warn(`Warn: ${message}`)
            break;
        case 'info':
            console.error(`Error: ${message}`)
            break;
    }
}


logger("warn", "menssagem que ninguém vai ler")