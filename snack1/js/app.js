// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Make array of object bicycles
const bicycles = [];

class Bicycle {
    constructor(variety, weight) {
        this.variety = variety;
        this.weight = weight;
    }
}

const getRndNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// add random bicycle
for ( let i = 0; i < 10; i++) {
    bicycles.push(new Bicycle(getRndNumber(1,20), getRndNumber(5,15)));
}
console.log(bicycles);

// find the lighter bicycle
let lightBicycle = bicycles[0];
for (let bicycle of bicycles) {
    if (lightBicycle.weight > bicycle) {
        lightBicycle = bicycle;
    }
}
let {variety, weight} = lightBicycle;
console.log(`The bycicle n°${variety} is the lighter, it weights ${weight}kg`);
