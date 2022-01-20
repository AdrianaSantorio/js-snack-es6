/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!

*/

/*
1 - creare un array di oggetti squadre di calcio
2 - generare numeri random (funzione)
3 - associarli alle proprietà punti fatti e falli subiti
*/

console.log('JS OK');

//2 

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let prova = getRandomNumber(1,5);
console.log('prova:', prova);

//1

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
console.table(soccerTeams);

//3

for (let i = 0; i <soccerTeams.length; i++) { //ciclo legato all' array
    const currentTeam = soccerTeams[i];
    currentTeam['points'] = getRandomNumber(0, 100);
    console.log(points);
}

console.table(soccerTeams);