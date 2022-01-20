/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
BONUS
Stampare in pagina oltre che in console!
*/

/* 
1- creare un array di oggetti
2- ricavare la variabile peso
3- trovare il peso minore
*/
console.log('JS OK');

const bicycles = [
    {name: 'Road bike', weight: 358,},
    {name: 'Cruise', weight: 372,},
    {name: 'Fixed Gear', weight: 451,},
    {name: 'Mountain Bike', weight: 763,},
    {name: 'BMX', weight: 358,},
    {name: 'Touring Bike', weight: 298,},
    {name: 'Recumbent Bike', weight: 287,},
    {name: 'Folding Bike', weight: 957,},
    {name: 'Utility Bike', weight: 530,},
];

let smallerweight = bicycles[0].weight;
let bike = '';
console.log(smallerweight);

for (let i = 0; i < bicycles.length; i++) { //ciclo relativo all' array
    const {weight} = bicycles[i]; //2
    const {name} = bicycles[i];
    console.log(weight);
    if (smallerweight > weight) { //3
        smallerweight = weight
        bike = name;
        console.log(smallerweight);
    };
};

//todo: funzione?

//collegare marca bicicletta
console.log(`La bicicletta dal peso minore è la ${bike}, che pesa ${smallerweight} gr`)


//todo: bonus