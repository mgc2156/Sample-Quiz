// variables
var correct = 0;

// prompt
var answer1 = prompt("What WashU landmark often wears a sweater?");
var answer2 = prompt("Where is the best place to get a bagel on campus?");
var answer3 = prompt("Where does WILD take place?");
var answer4 = prompt("Where does WUStock take place?");
var answer5 = prompt("What did the Chancelor NOT invent?");

// if statement
if ( answer1.toUpperCase() === 'THE BUNNY' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'EINSTEINS' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'BROOKINGS QUAD' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'THE SWAMP' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'THE GLOWSTICK' ) {
 correct += 1;
}

// output results
//score
document.write("<p>Your score: " + correct + " out of 5</p>");
//q1
document.write("<p><strong>Question 1: What WashU landmark often wears a sweater?</strong></p>");
document.write("<p>Your answer: " + answer1 + " Correct Answer: THE BUNNY</p>");
//q2
document.write("<p><strong>Question 2: Where is the best place to get a bagel on campus?</strong></p>");
document.write("<p>Your answer: " + answer2 + " Correct Answer: EINSTEINS</p>");
//q3
document.write("<p><strong>Question 3: Where does WILD take place?</strong></p>");
document.write("<p>Your answer: " + answer3 + " Correct Answer: BROOKINGS QUAD</p>");
//q4
document.write("<p><strong>Question 4: Where does WUStock take place?</strong></p>");
document.write("<p>Your answer: " + answer4 + " Correct Answer: THE SWAMP</p>");
//q5
document.write("<p><strong>Question 5: What did the Chancelor NOT invent?</strong></p>");
document.write("<p>Your answer: " + answer5 + " Correct Answer: THE GLOWSTICK</p>");


//results

if (correct == 5) {
document.write("<h3>Gold Star For You!</h3>")
document.write("<img src='http://bossierpress.com/wp-content/uploads/2015/03/gold-star-graphic.jpg' >");
}

if (correct == 4) {
  document.write("<h3>Silver Star For You!</h3>")
  document.write("<img src='http://www.lawgcap.org/media/Ribbon%20Attachments/CAP-Silver-Star-Attachment-v1.png' >");
}
if (correct == 3) {
  document.write("<h3>Bronze Star For You!</h3>")
  document.write("<img src='http://www.psdgraphics.com/file/bronze-star.jpg' >");
}

if (correct == 2 || correct == 1) {
  document.write("<h3>Better Luck Next Time!</h3>")
  document.write("<img src='http://images.moneysavingexpert.com/images/sadface.jpg' >");
}

else {
  
}
