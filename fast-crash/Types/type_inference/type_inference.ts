let car = {

    brand: "BMW",
    engine: 3.4,
    run: function(){
        console.log("fasssst 100 km/h")
    }

}

car.engine = 4.5 //OK
//car.brand = 5.4; //Type error
//car.run = "foo"; //Type error

let house = "house";
//house = 112 //Type error