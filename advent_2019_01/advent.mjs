import { readFile } from 'fs';

readFile('./input.txt', 'utf-8', (err,data) =>{
    if (err) throw err;
    var modules_weights = data.split("\n")
    var total_fuel = 0;

    for (let m of modules_weights) {
        console.log("Module weight is:",m);
        let fuel = requiredFuel(m);
        console.log("Fuel used for module is:",fuel);
         
        //lets add the base fuel required for module to total fuel
        total_fuel += fuel;

        //now we check how much extra fuel we need to add to the toal for the "fuel tax"
        while(requiredFuel(fuel)>0){
            fuel = requiredFuel(fuel);
            total_fuel += fuel;
        }
        console.log("Current total is:",total_fuel);
    }
    console.log("Total fuel for the ship is:",total_fuel);
    function requiredFuel(mass) {
        return Math.floor(mass/3)-2;
    }
})
