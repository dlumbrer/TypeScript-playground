interface AutomobileInterface {

    brand: string;
    speed: number;
    speedMethod(velocidad: number): void

}


const automobile: AutomobileInterface = {

    brand: "BMW",
    speed: 200,
    speedMethod(){
        console.log(`this ${this.brand} is soooo quick`)
    }


}


function car1(){



}