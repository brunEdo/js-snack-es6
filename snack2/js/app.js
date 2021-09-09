// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// # FUNCTIONS
const getRndNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// find the biggest object in an array, based on one parameter
const findBiggestObject = (array, parameterString) => {
    let biggest = array[0][`${parameterString}`];
    let biggestIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][`${parameterString}`] > biggest) {
            biggest = array[i][`${parameterString}`];
            biggestIndex = i;
        }
    }
    return biggestIndex;
}

// find the smallest object in an array, based on one parameter
const findSmallestObjects = (array, parameterString) => {
    let smallest = array[0][`${parameterString}`];
    let smallestIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][`${parameterString}`] < smallest) {
            smallest = array[i][`${parameterString}`];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

// Selection sort: sort object in a array based on one parameter and a choosen find function
const selectionSortObjects = (array, parameterString, findFunction) => {
    let arrayCopy = [...array];
    let sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        sortedArray.push(arrayCopy.splice(findFunction(arrayCopy, parameterString), 1));
    }
    return sortedArray;
}

// # MAIN SCRIPT

// Make array of team object
const teams = [];

// team object features
class Team {
    constructor(name, scoredPoints, sufferedFouls) {
        this.name = name;
        this.scoredPoints = scoredPoints;
        this.sufferedFouls = sufferedFouls;
    }
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

// Teams Ranking based on scored points
const teamsPointsRanking = selectionSortObjects(teams, "scoredPoints", findBiggestObject);
console.log("Teams Ranking based on scored points", teamsPointsRanking);

// Teams Ranking based on which suffered less fouls
const teamsFoulsRanking = selectionSortObjects(teams, "sufferedFouls", findSmallestObject);
console.log("Teams Ranking based on which suffered less fouls", teamsFoulsRanking);