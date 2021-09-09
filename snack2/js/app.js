// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Make array of team object
const teams = [];

class Team {
    constructor(name, scoredPoints, sufferedFouls) {
        this.name = name;
        this.scoredPoints = scoredPoints;
        this.sufferedFouls = sufferedFouls;
    }
}

const getRndNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// add 20 teams to the array
for ( let i = 0; i < 20; i++) {
    teams.push(new Team(`Team n°${i + 1}`, 0, 0));
}

// add random scored points and random suffered fouls
for (let team of teams) {
    team.scoredPoints += getRndNumber(1, 20);
    team.sufferedFouls += getRndNumber(10, 40);
}
console.log("Teams names, their scored points and their suffered fouls count", teams);

// new array of teams, without scored points 
const teamsFouls = [];
for (let i = 0; i < teams.length; i++) {
    let {name, sufferedFouls} = teams[i];
    let team = {
        name,
        sufferedFouls
    }
    teamsFouls.push(team);
}
console.log("Teams names and their suffered fouls count", teamsFouls);