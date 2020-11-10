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
car1(automobile);
