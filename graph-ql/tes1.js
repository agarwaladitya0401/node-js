const a = require("test.js");

a();


function fun() {

}

const fun = function(){
    // Anonymous function
}

const fun = () => {
    // Arrow function
}

const fun = x => {

}

const fun = (x, y) => {

}

const fun = (x, y) => {
    const z = x + y;
    return z;
}

const fun = (x, y) => x + y;

const fun = (x, y) => ({x, y});