/*
SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

//inserire un array
//passare ogni elemento dell' array
//verificare che la posizione dell' array sia minore di a e maggiore di b
//se è così, inserirlo nel nuovo array

function getItemsByIndexPosition(array, a, b) {
    const newArray = array.filter ((item, index) => {
        if (index >= a && index <= b) {
            return true;
        }
        return false;
    });

    return newArray;
}; 


const soccerTeams = [
    { name: 'Liverpool', points: 0, foulsDrawn: 0,},
    { name: 'Chelsea', points: 0, foulsDrawn: 0,},
    { name: 'Manchester United', points: 0, foulsDrawn: 0,},
    { name: 'Manchester City', points: 0, foulsDrawn: 0,},
    { name: 'Tottenham Hotspur', points: 0, foulsDrawn: 0,},
    { name: 'Everton', points: 0, foulsDrawn: 0,},
    { name: 'Crystal Palace', points: 0, foulsDrawn: 0,},
    { name: 'West Ham United', points: 0, foulsDrawn: 0,},
];

const newArray = getItemsByIndexPosition(soccerTeams,3,5);

console.log(newArray);



