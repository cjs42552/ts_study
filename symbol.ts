console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();
const obj = {
    [sym] : "value"
};

console.log(obj[sym]); 
//"value"