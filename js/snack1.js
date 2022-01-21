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


//# rispetto al ragionaento, c'è la differenza, nel senso che io cercavo il peso minore, loro cercavano L' OGGETTO col peso minore
let smallestweight = bicycles[0].weight;
let bike = '';
console.log(smallestweight);

for (let i = 0; i < bicycles.length; i++) { //ciclo relativo all' array
    const {weight, name} = bicycles[i]; //2
    console.log(weight);

    if (smallestweight > weight) { //3
        smallestweight = weight
        bike = name;
        console.log(smallestweight);
    };
};

//todo: funzione?(blergh)

//collegare marca bicicletta
console.log(`La bicicletta dal peso minore è la ${bike}, che pesa ${smallestweight} gr`)


//todo: bonus