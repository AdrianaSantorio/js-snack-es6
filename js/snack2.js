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
4 - estrapolare nomi e falli subiti
5 - inserirli in un nuovo array
6 - stampare il nuovo array
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
//#apparently current è brutto usarlo, cambiamo semplicemente in team
for (let i = 0; i <soccerTeams.length; i++) { //ciclo legato all' array
    const currentTeam = soccerTeams[i];
    currentTeam.points = getRandomNumber(0, 100);
    currentTeam.foulsDrawn = getRandomNumber(0,300);
}

console.table(soccerTeams);

//4 

const chartedFouls = [];
console.table(chartedFouls);

for (let i = 0; i <soccerTeams.length; i++) { //ciclo legato all' array
    const {name, foulsDrawn} = soccerTeams[i]; //4
    console.log(name);
    console.log(foulsDrawn);
    //#sta roba poteva esser fatta molto più brevemente, ricordandosi anche la notazione se il nome della proprietà e il nome della costante che indica il valore coincidono
    const addTeam = {}; //5
    addTeam.name = name;
    addTeam.foulsDrawn = foulsDrawn;

    chartedFouls.push(addTeam);
}

console.table(chartedFouls);

const displayElement = document.getElementById('display');

for (let i = 0; i <chartedFouls.length; i++) { //ciclo legato all' array
    for (let key in chartedFouls[i]) {
        const div = document.createElement('div');
        const strong = document.createElement('strong');
        strong.append(key + ': '); //inserisce chiave nello strong
        div.appendChild(strong);
        div.append(chartedFouls[i][key]);//append mette del testo alla fine
        displayElement.appendChild(div);
    }
};
