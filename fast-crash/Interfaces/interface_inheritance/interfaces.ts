interface AutomobileInterface {

    brand?: string; ///////////OJOOO, ? is optional parameter
    speed?: number;
    speedMethod?(velocidad: number): void

}


interface AutomobileInterface2 extends AutomobileInterface {

    brand: string; //This make the param MANDATORY
    speed: number;


}

const automobile2: AutomobileInterface2 = {

    brand: "Porsche",
    speed: 20,

}