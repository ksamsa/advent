import { readFile } from 'fs';

readFile('./input.txt', 'utf-8', (err,data) =>{
    if (err) throw err;
    var modules_weight = data.split("\n")
    var required_fuel = 0;
    for (let module of modules_weight) {
        required_fuel += Math.floor(module/3)-2;
    }
    console.log(required_fuel);
})
