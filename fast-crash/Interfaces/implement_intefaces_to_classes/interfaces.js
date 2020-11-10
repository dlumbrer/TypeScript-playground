"use strict";
const automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is soooo quick`);
    }
};
function car1(automobile) {
    //automobile.speed = "aksjkasj"; //NOT OK
    console.log(`this ${automobile.brand} is soooo quick, runs at ${automobile.speed}`);
}
//car1(automobile)
class AutomobileClass {
    constructor(brand) {
        this.brand = brand;
        this.speed = 200;
    }
    speedMethod(speed) {
        console.log("Hi, my cars is going at " + speed + " but can be at " + this.speed);
    }
}
let carObject = new AutomobileClass("BMW");
carObject.speedMethod(100);
