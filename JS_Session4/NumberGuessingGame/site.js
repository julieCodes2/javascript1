function submitData() {
        return guessForm (min ,max);
var user_guess = document.getElementById("guessForm").value;
    if (user_guess < 1 || user_guess >11)
        alert("Please enter a number between 1 and 10.");
    }
        //if error
       
         //   updateDOM("ERROR", "red");
        else{
            alert("good job");
        }
//done starts
//function updateDOM(value, color) {
        //document.getElementById("output").innerHTML = value; // make sure you have a div in html file with id of output.
        // update color of div as well
        //here comes the status
        //document.getElementById(statusArea). innerHTML = value;
    //};
    //done ends

    function numberGuessGame(min, max) {
        // see logic and code above
          num = randomNumber(min, max);
        // declare message variable with something like , "I'm thinking of a number between 'min' and 'max', try to guess it"
         alert("Please enter a number between 1 and 100.");
}
        let guess; // declare guess as empty variable so you can modify it from the loop

        // here comes the while part of (do...while Loop)
         var i =1; 
         //parseInt(prompt(message))
    do {
document.write("<p>The number is " + guess + "</p>");
i++;
    }
        while(i <=11);    
             

     
// if else statement comes in
         if(guess < answer){
 msg1.textContent = "Your guess is too low.";
 msg2.textContent = "No. of guesses: " + no_of_guesses;
 msg3.textContent = "Guessed numbers are: " + guessed_nums;
         }

               else if(guess > answer){
 msg1.textContent = "Your guess is too high.";
msg2.textContent = "No. of guesses: " + no_of_guesses;
 msg3.textContent = "Guessed numbers are: " + guessed_nums;
         }
         else if (guess == answer){
 msg1.textContent= "Yippie You win!";
msg2.textContent = "The number was: " + answer;
 msg3.textContent = "You guessed it in "+ no_of_guesses + " guesses";
 } 
//if else statement ends
    //     // modify message to say congratulations!!!
    //     updateDOM(message, "green");
    

    // 

    function answer(min, max) { 
         return Math.floor(Math.random() * (10 - 1) + min);
        // numberOfGuesses = 0;
    //writeMessage('historyList', '');
    } 
          //console.log("Random Number between 1 and 5: ")
  
// Function call
//console.log(randomNumber);          




