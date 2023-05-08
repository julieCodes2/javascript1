function submitData() {
        // This function will retrieve the form data, and check for validation errors (they need to submit valid numbers AND the low number has to be less than the high number). If there is an error, display the error by calling the updateDOM function and stop the remaining code execution. If there is no error, call the numberGuessGame and pass in min and max as parameters.
        // retrieve form data -- min and max
//if error
  //updateDOM("ERROR", "red");
// else
//numberGuessGame(min, max)
 // handle submit
 //alert (simbag= "your answer"+ userGuessed);
 let min =
 parseInt(document.getElementById('min').value);
 let max=
 parse(document.getElementById('max').value);

 if (!Number.isInteger(min) || ! Number.isInteger(max)) {
    updateDOM('specified low and high numbers must be integer numbers', 'red');
    return 
 }
 if (min>=max) {
    updateDOM ('low number must be smaller than high number', 'red');
    return
 }
 numberGuessGame(min,max);
 }
//------------------//
 function updateDOM(value, color) {
    const div =
    document.getElementById("output");
    div.style.color = color;
    div.innerHTML=value;
 }

        // This function will display the error message if there is a validation error. And later it will also display "CONGRATULATIONS!!! __ is correct!". The value parameter will either be the error message string, or the congratulations message. The color you can use to make the error red, or the congrats message a special color.
        // document.getElementById("output").innerHTML = value; // make sure you have a div in html file with id of output.
        // update color of div as well
        //document.getElementById("output").innerHTML = value;
    }
//-----------------------//
         // This function will include the loop and the logic to drive the game. Use a do while loop with a condition similar to while(userGuess != actualNumber). Inside the loop, use prompt() to prompt the user for their next guess, and display their progress letting them know if they need to guess higher or lower in the prompts. This function will take a fair bit of thought. Perhaps this code structure may be helpful as you write this code:
        //let num = randomNumber(min, max)
        
        // declare message variable with something like , "I'm thinking of a number between 'min' and 'max', try to guess it"
        //alert("Please guess a number between 1 and 10";)
        //let guess; // declare guess as empty variable so you can modify it from the loop
    //     do {
    //         guess = parseInt(prompt(message))
    //         // if too low modify message to say that their guess is too low
    //         // if too high, modify message to say that they guess is too high
    //     } while(..guess is wrong..)
    //     // modify message to say congratulations!!!
    //     updateDOM(message, "green");
    // }
                    
    // }


   function numberGuessGame(min, max){
    
    const secretNumber = randomNumber(min, max);
    let message = 'Please guess a number between ' + min + ' and ' + max + '!';
    let guess;
    do {
        const value = prompt(message);
        if (value===null) {
            updateDOM('Game was cancelled!', 'blue');
            return
        }
        guess = parseInt(value);
        //only modify message if a valid number was specified

    if (Number.isInteger(guess)) {
        if (guess < secretNumber) {
            message = 'You need to guess higher than ' + guess + ', please pick another number';
        }else {
            message = 'You need to guess lower than ' + guess + ', please try again!';
        }
    }
            }while (guess !== secretNumber);
            
            updateDOM('CONGRATULATIONS!!! ' + secretNumber + ' is correct', 'green');
        }
    
    //var hula = document.getElementById('min', 'max').value;
//var userGuessed = document.getElementById('guessForm').value;
    //var msg= "Please guess a number between 1 and 10";
      
    // if (hula == secretNumber) {
	// 			alert('output', '<p>you guessed it</p>');
	// } else {
	// alert('output', '<p>try again</p>');
    // }; 
   
// 		if (hula == secretNumber) {
// 			// Got it
// 			document.write('statusArea', '<p>You got me in ' + numberOfGuesses +' guesses, I was thinking ' + secretNumber + '. Let\'s go again...</p>');
// 			newGame();
// 		} else if (hula < secretNumber) {
// 			// User needs to guess higher
// 			alert('statusArea', '<p>You need to guess higher than ' + hula + ', try again...</p>');
// 			alert('historyList', '<li>' + hula +' (too low)</li>', true);
// 		} else {
// 			// User needs to guess lower
// 			alert('statusArea', '<p>You need to guess lower than ' + userGuessed + ', try again...</p>');
// 			alert('historyList', '<li>' + hula + ' (too high)</li>', true);
// 		}
// 	}

// 	document.getElementById('guessForm').value = '';	
// }
   
//-------------------------------//this part is done starts
    function randomNumber(min, max) { 
        // This function will take the numbers the user put in for the range of the game. It will use Math.random to produce a whole,random number within that range. This reference may be helpful.
        //return Math.floor(Math.random() * (10 - 1) + min);
return Math.round(Math.random() * (max - min) + min);
	}
    //--------------------this part is done ends


      
        


