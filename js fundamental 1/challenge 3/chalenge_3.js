

// Coding Challenge #3


// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:

// 1.Calculate the average score for each team, using the test data below

// 2.Compare the team's average scores to determine the winner of the competition,
//   and print it to the console. Don't forget that there can be a draw, so test for that
//   as well (draw means they have the same average score) 

// 3.Bonus1: Include a requirement for a minimum score of 100. With this rule, a 
//   team only wins if it has a higher score than the other team, and the same time a
//   score of at least 100 points. Hint:Use a logical operator to test for minimum
//   score, as well as multiple else-if blocks 😉

// 4.Bonus2:Minimum score also applies to a draw! So a draw only happens when
//   both teams have the same score and both have a score greater or equal 100 points. 
//   Otherwise, no team wins the trophyTest

//   Test data:

//   Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 

//   Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

//   Data Bonus2: Dolphins score 97, 112 and101. Koalas score 109, 95 and 106




// solution  //

// TASK 1

const averageDolphinsScore = (96 + 108 + 89)/3;

const averageKoalasScore = (88 + 91 + 110)/3;


// TASK 2

if (averageDolphinsScore > averageKoalasScore) {
  console.log(`Dolphin Team win's the trophy from (${averageDolphinsScore - averageKoalasScore}) point's`)
} else if (averageKoalasScore > averageDolphinsScore) {
  console.log( `Koalas Team win's the trophy from (${averageKoalasScore - averageDolphinsScore }) point's`)
} else if (averageDolphinsScore === averageKoalasScore) {
  console.log("both the Team have equal Score")
}

//BONUS 1  & 2

const dolphinScore = (97 + 112 +101)/3
const koalasScore = (109 + 95 +123)/3


if ( dolphinScore >= koalasScore && dolphinScore >= 100) {
  console.log(`Dolphin Team win's the trophy from (${dolphinScore - koalasScore}) point's`)
} else if (koalasScore >= dolphinScore && koalasScore >= 100) {
  console.log( `Koalas Team win's the trophy from (${koalasScore - dolphinScore }) point's`)
} else if (dolphinScore === koalasScore && dolphinScore >= 100 && koalasScore >= 100) {
  console.log("both the Team have equal Score")
}else{
  console.log("No one wins the trophy")
}


