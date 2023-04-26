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

module.exports = new Logger();

// in node.js export the Instance of the class, node.js will handle the singleton pattern internally