class Logger {
    constructor() {
        this.logs = [];
    }

    addLog(value) {
        this.logs.push(value);
    }

    getLog() {
        return [...this.logs];
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
        return Singleton.instance;
    }
}

const l1 = new Singleton();
const l2 = new Singleton();

l1.addLog("l1 log");
l2.addLog("l2 log");
console.log(' l1 :-', l1.getLog(), '\n' , 'l2 :-', l2.getLog());