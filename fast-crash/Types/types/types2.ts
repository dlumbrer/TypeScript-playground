let foo: any; 

foo = 12;

foo = "David"

let cars: string[] = ["Toyota", "BMW", "Mercedes"]

// cars = "nissan" //ERROR, type error

let cars2: any[] = ["Toyota", "BMW", "Mercedes"]

cars2 = ["nissan"] //OK
cars2 = [true] //OK

