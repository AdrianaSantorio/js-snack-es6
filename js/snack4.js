/*
SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
*/

const students = [
    {id:344, name:'marco Rossi', grades:45,},
    {id:123, name:'pietro Bianchi', grades:87,},
    {id:124, name:'giuseppe Verdi', grades:47,},
    {id:357, name:'luca Pervinca', grades:48,},
    {id:245, name:'azzurra Celeste', grades:81,},
    {id:089, name:'violetta Mogano', grades:54,},
    {id:111, name:'gemma Oro', grades:56,},
    {id:101, name:'claudia Neri', grades:09,},
    {id:001, name:'lucia Rosa', grades:54,},
    {id:002, name:'rosa de Rossi', grades:23,},
    {id:345, name:'carlo cremisi', grades:65,},
    {id:045, name:'martina smeraldo', grades:13,},
    {id:067, name:'francesco cielo', grades:54,},
    {id:145, name:'lorenzo de klein', grades:54,},
];

const plaques = students.map ((student) => {
    
    const {name} = student;
    const initial = name.charAt(0).toUpperCase();
    const otherLetters = name.substring(1).toLowerCase();
    return initial + otherLetters;
});

console.log(plaques);