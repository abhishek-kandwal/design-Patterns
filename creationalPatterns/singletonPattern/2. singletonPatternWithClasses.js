let loggerClassInstance = null;

class Logger {
    constructor() {
        this.logs = [];
        if (loggerClassInstance) return loggerClassInstance;
        else {
            loggerClassInstance = this;
        }
    }

    addLog(log) {
        this.logs.push(log);
    }

    getLog() {
        return [...this.logs];
    }
}

const logger = Object.freeze(new Logger);
// const logger = new Logger;

const log1 = logger;
const log2 = logger;

log1.addLog('hello log1');
log2.addLog('hello log2');
console.log(' log1 :-', log1.getLog(), '\n' , 'log2 :-', log2.getLog());