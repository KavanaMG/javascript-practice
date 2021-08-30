/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 */


const calcAverage = (a, b, c) => (a + b + c) / 3;
let dolphinScore = calcAverage(44, 23, 71);
let kolasScore = calcAverage(65, 54, 49);
console.log(dolphinScore, kolasScore);

const checkWinner = function(avgDolphins, avgKolas){
    if(avgDolphins >= 2 * avgKolas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKolas})`);
    }else if(avgKolas >= 2 * avgDolphins){
        console.log(`Kolas win (${avgKolas} vs ${avgDolphins})`);
        }else{
            console.log('No team wins');
        }
    }
    checkWinner(dolphinScore, kolasScore);

//Testdata 2

dolphinScore = calcAverage(85, 54, 41);
kolasScore =calcAverage(23, 34, 27);
checkWinner(dolphinScore, kolasScore);



const friends = ['kavana', 'Puneeth', 'Dhanush'];
console.log(friends);


const years = new Array(1991, 1987, 2000);
console.log(years);

console.log(friends[0]);