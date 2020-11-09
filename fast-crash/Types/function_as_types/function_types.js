function stringFunction() {
    console.log("Hellow im a string");
    return "stringgg";
}
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
console.log(cal(2, 2));
var universal; //Universal will be a function that returns a string
//universal = cal //Type error
universal = stringFunction; //OK
var universalNumber;
// universalNumber = cal //Error cause universalNumber don't have parameters
var universalNumber2;
universalNumber2 = cal; //OK, strict
