/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const  dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;

const avgDolphinScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

const kolasScore1 = 88;
const kolasScore2 = 91;
const kolasScore3 = 110;

const avgKolasScore = ( kolasScore1 + kolasScore2 + kolasScore3) / 3;

console.log(avgDolphinScore , avgKolasScore);

if(avgDolphinScore > avgKolasScore){
    console.log('Winner is Dolphin');
}else if(avgKolasScore > avgDolphinScore){
    console.log('Winner is Kolas');
}else if(avgDolphinScore === avgKolasScore){
    console.log('Draw')
}

const minScore = 100;
if((avgDolphinScore >= minScore) || (avgDolphinScore > avgKolasScore)){
    console.log('Winner is Dolphin');
}else if((avgKolasScore >= minScore) || (avgKolasScore > avgDolphinScore)){
    console.log('Winner is Kolas');
}else if(avgDolphinScore === avgKolasScore && avgDolphinScore >= 100 && avgKolasScore >= 100){
    console.log('Draw')
}else{
    console.log('Noone wins')
}