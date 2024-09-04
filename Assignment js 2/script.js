// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<div style='border:2px solid blue; padding:20px; margin:20px; background-color:#f9f9f9; box-shadow:3px 3px 10x rgba(0.0.0.0.1); border-radius:10px; font-family:Arial,sans-serif; color:#333; text-align:left; width:300px; line-height:1.5;'>")
var number = parseFloat(prompt("Enter a positive integer...",0));
document.write("<h1>Number: " + number +"<br>");
document.write("<h1>Round off value: " + Math.round(number) +"<br>");
document.write("<h1>Floor value: " + Math.floor(number) +"<br>");
document.write("<h1>Ceil value: " + Math.ceil(number) +"<br>");
document.write("</div>")
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<div style='border:2px solid blue; padding:20px; margin:20px; background-color:#f9f9f9; box-shadow:3px 3px 10x rgba(0.0.0.0.1); border-radius:10px; font-family:Arial,sans-serif; color:#333; text-align:left; width:300px; line-height:1.5;'>")
var negativeNumber = parseFloat(prompt("Enter a Negative floating point number...",0));
document.write("<h1>Number: " + negativeNumber +"<br>");
document.write("<h1>Round off value: " + Math.round(negativeNumber) +"<br>");
document.write("<h1>Floor value: " + Math.floor(negativeNumber) +"<br>");
document.write("<h1>Ceil value: " + Math.ceil(negativeNumber) +"<br>");
document.write("</div>")
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write("<div style='border:2px solid blue; padding:20px; margin:20px; background-color:#f9f9f9; box-shadow:3px 3px 10x rgba(0.0.0.0.1); border-radius:10px; font-family:Arial,sans-serif; color:#333; text-align:left; width:300px; line-height:1.5;'>")
var absoluteValue = parseFloat(prompt('Enter a number'));
document.write("<h1>Absolute value of " + absoluteValue + " is: " + Math.abs(absoluteValue) + "<br>");
document.write("</div>")
// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
document.write("<div style='border:2px solid blue; padding:20px; margin:20px; background-color:#f9f9f9; box-shadow:3px 3px 10x rgba(0.0.0.0.1); border-radius:10px; font-family:Arial,sans-serif; color:#333; text-align:left; width:300px; line-height:1.5;'>")
var diceValue = Math.floor(Math.random()*6)+1;
document.write("<h1>Random dice value: " + diceValue + "<br>")
document.write("</div>")
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
document.write("<div style='border:2px solid blue; padding:20px; margin:20px; background-color:#f9f9f9; box-shadow:3px 3px 10x rgba(0.0.0.0.1); border-radius:10px; font-family:Arial,sans-serif; color:#333; text-align:left; width:300px; line-height:1.5;'>")
var randomValue = Math.floor(Math.random()*2)+1;
if(randomValue == 2){
    document.write("<h1>" + randomValue + "<br>");
    randomValue = "Heads"
    document.write("<h1>Random coin value: " + randomValue + "<br>");
}  else {
    document.write("<h1>" + randomValue + "<br>");
    randomValue = "Tails"
    document.write("<h1>Random coin value: " + randomValue + "<br>");
}
document.write("</div>")
// 6. Write a program that shows a random number between 1
// and 100 in your browser.
document.write("<div style='border:2px solid blue; padding:20px; margin:20px; background-color:#f9f9f9; box-shadow:3px 3px 10x rgba(0.0.0.0.1); border-radius:10px; font-family:Arial,sans-serif; color:#333; text-align:left; width:300px; line-height:1.5;'>")
var randomNumber = Math.floor(Math.random()*100)+1;
document.write("<h1>Rnadom number between 1 and 100: " + randomNumber + "<br>");
document.write("</div>")
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
document.write("<div style='border:2px solid blue; padding:20px; margin:20px; background-color:#f9f9f9; box-shadow:3px 3px 10x rgba(0.0.0.0.1); border-radius:10px; font-family:Arial,sans-serif; color:#333; text-align:left; width:300px; line-height:1.5;'>")
var userInput = prompt("Enter your weight (e.g: 50,50kgs , 50.2kgs , 50.2 kilograms)");
var weight = parseFloat(userInput);
document.write("<h1> The weight of user is " + weight + " kilograms" + "<br>");
document.write("</div>")
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNumber = Math.floor(Math.random()*10)+1;
var userGuess = parseInt(prompt("Guess a number between 1 to 10"));

if (userGuess == secretNumber){
    alert("Congratulations you guessed the correct number!");
} else {
    alert("Try again!")
}