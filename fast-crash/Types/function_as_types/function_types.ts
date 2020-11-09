function stringFunction(): string{
    
    console.log("Hellow im a string")

    return "stringgg"

}

function cal (val1: number, val2: number): number{
    let total = val1 + val2
    return total;
}

console.log(cal(2,2))

let universal: () => string; //Universal will be a function that returns a string
//universal = cal //Type error
universal = stringFunction //OK

let universalNumber: () => number;
// universalNumber = cal //Error cause universalNumber don't have parameters

let universalNumber2: (value1: number, value2: number) => number;
universalNumber2 = cal //OK, strict