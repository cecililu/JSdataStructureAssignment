const game=
{
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
"Neuer",
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho', 
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby',
'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds : {
team1: 1.33,
X: 3.25,
team2: 6.5,
},
};


// solution
const player1=game.players[0];
const player2=game.players[1];
const [gk1]=player1;
const [gk2]=player2;
const [,...feildplayer1]=player1;
const [,...feildplayer2]=player2;
const allplayers=[...player1,...player2]
const finalplayer1=[...player1,'Thiago','Coutinho','Perisic']
const {team1,X:draw,team2}=game.odds


function printGoals( ...scorers){
    const count={}
    for(const ele of scorers){
        count[ele]=count[ele] ? count[ele]+1 :1;
    }
    for(const key in count){
        console.log(`${key} scored ${count[key]}`)
    }
    console.log('\n')
}


//
printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich')
printGoals(...game['scored'])
// console.log()
