
var readlineSync = require('readline-sync');
var score= 0;
const chalk= require("chalk");
const log= console.log;

var highscorer=[ 
  
  {name:"Syed",
   score:8},
   {
     name:"Pam",
     score:6
   }
]

//Welcome Message
var yn = readlineSync.question("Do you like" + chalk.bgBlue.bold(" THE OFFICE?") + " " );

if(yn=="yes")
{
  log("That's Great!");
}
else{
  log("That's okay, you can take the quiz anyway :) \n")
}
var userName = readlineSync.question("What's your name? ");
log("--------------------")
log(chalk.bgRed("Hello " + userName + " Welcome to the quiz!" + 
" Blow are the Instructions of this quiz:\n ") ) 
log("1) There are 2 levels to this quiz \n2) There are 4 MCQ question in each level \n3) You will be get 1 point for each correst answer and a negative point for every wrong answer \n4) You can enter level 2 if you have 3 or more points \n" )

var y= readlineSync.question(chalk.yellow("All the best! Press any key to start: "))
log("--------------------\n")

//Level - 1
// Defining a function "level1" with quiz logic
function level1(question, options, answer)
{
log(chalk.bgBlue(current.question))
var userAns= readlineSync.keyInSelect(options);
if(userAns+1===answer)
{
  log(chalk.green("Right!\n"))
  score++
}
else if(userAns+1===0)
{
  log(chalk.blue("Moving to next question...."));
}
else
{
  log(chalk.red("Wrong!\n"))
  score--
}
log("Your current score is: "+ chalk.cyan(score));
log(" ")
}

// Defining a data structure for the function "level1"
var questions= [
  {
    question: "What does Dunder MIfflin sell?",
    options: ["Paper", "Laptops", "Desks"],
    answer: 1,
  },

  {
    question: "What is Micheal Scot's greatest fear?",
    options: ["Women", "Nothing", "Snakes"],
    answer: 2,
  },    

   {
question:"What substance does Jim put office supplies owned by Dwight into? ",
    options: ["Jello", "Lemonade", "Desk"],
    answer: 1,
  },

   {
question:
    "Who calls Jim by the nicknames Tuna or Big Tuna ?",
    options: ["Andy", "Pam", "Dwight"],
    answer: 1,
  },
]


//Loop to call the "level1" function
 for( var i=0; i<questions.length; i++)
 {
   var current= questions[i];
   level1(current.question, current.options, current.answer);
 } 
 log(chalk.bgRed("\n Your total score is : " + score ))

function showscore(){
  log("--------------------")
  log(chalk.bgRed("Your total score is : " + score ))
 console.log(chalk.bgRed("\nHighscores Leaderboard: "))
for(var j=0;j<highscorer.length;j++)
{
   var currenthighscorer=highscorer[j];
        console.log(chalk.yellowBright(currenthighscorer.name)+":"+chalk.cyan(currenthighscorer.score))
 }
}



//Level - 2
if(score==3 || score>3)
{
  log("--------------------")
  log(chalk.bgYellow("\nYou've reached level - 2\n"));

// Defining a function "level2" with quiz logic
function level2(question, options, answer)
{
  log(chalk.bgBlue(current2.question))
var userAns= readlineSync.keyInSelect(options);
if(userAns+1===answer)
{
   log(chalk.green("Right!\n"))
  score++
}
else if(userAns+1===0)
{
  log("Moving to next question....");
}
else
{
  log(chalk.red("Wrong!\n"))
  score--
}
log("Your current score is: "+ chalk.cyan(score));
log(" ")
}

// Defining a data structure for the function "level - 2"
var questions2= [
  {
    question: "What's Pam's favorite flavor of yogurt?",
    options: ["Strawberry", "Mixed Berry", "Blue Berry"],
    answer: 2
  },

  {
    question: "What's Phyllis's maiden name?",
    options: ["Lapin", "Vance", "Lanpin"],
    answer: 1
  },    

   {
question:"What does Kevin suggest Dwight put in his gun holster? ",
    options: ["Cellphone", "A Banana", "Fake Gun"],
    answer: 2
  },

   {
question:
    "What did Kevin buy for himself when he got himself for Secret Santa?",
    options: ["A foot bath", "M&Ms", "Doughnuts"],
    answer: 1
  },
]

//Loop to call the "level - 2" function
 for( var i=0; i<questions2.length; i++)
 {
   var current2= questions2[i];
   level2(current2.question, current2.options, current2.answer);
 } 
 function check()
 {
   if(score==8)
   {
     log("\nHurray! you are the highst scorer.")
   }
    else if(score==7 || score>5)
    {
      log("\nYay! you are the second highest scorer.")
    }
    else
    {
      log("\nYou are not an Office Fan, try again later")
    }
 }
 showscore()
 check()
}

else
{
  log("\nSorry you have less score you cannot go to level 2 but you can try again :) ")
  showscore()
}

// end of the quiz






