// self invoked function 
const process = (() => {
    let pInstance;
    
    function instanceOfThisFn() {
        // making instance of this function
        this.numProcess = 0;
        this.values = [];

        this.addValue = (value) => {
            this.values.push(value);
        }

        this.getValue = () => {
            return [...this.values];
        }
    }

    function createInstance() {
        pInstance = new instanceOfThisFn();
        pInstance.numProcess += 1;
        return pInstance;
    }

    return {
        getInstance: () => {
            if(pInstance) return pInstance;
            else return createInstance();
        }
    }
})();

// 2 different instances of same function points to same single Function scope.
const p1 = process.getInstance();
const p2 = process.getInstance();

console.log('check p1, p2 same instance :- ', p1 === p2);

// add value to seperate instance
p1.addValue('this is from p1');
p2.addValue('this is from p2');

console.log(' p1 :-', p1.getValue() , '\n', 'p2 :-', p2.getValue());