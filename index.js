function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
function namedFunction() {
    console.log("This is a named function");
}
return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}
receivesAFunction(function() {
    console.log("Callback function called!");
});
var namedFunc = returnsANamedFunction();
namedFunc();
var anonymousfunc = returnsAnAnonymousFunction();
anonymousfunc();