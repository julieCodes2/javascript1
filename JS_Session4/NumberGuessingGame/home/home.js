function submitData() {
        // retrieve form data -- min and max
        let min = Number(gameform.min.value);
        let max = Number(gameform.max.value);
        //console.log(min);
        //console.log(max);
        //console.log(typeof min);

//it will be 5 and 10

if (min == "" || max == ""){
    let value = "Both fields must be filled in.";
    let color = red;
    updateDOM(value, color);
    return false;
    //if it fails the check there
}

if (min >= max) {
    let value = "the min value cannot be greater than max";
    let color = "red";
    updateDOM(value,color)
    
}
numberGuessGame(min,max);
return false;
        //if error
            //updateDOM("ERROR", "red");
        // else
           // numberGuessGame(min, max)
    }

    function updateDOM(value, color) {
        document.getElementById("output").innerHTML = value; 
        document.getElementById("output").style.color = color;
        // make sure you have a div in html file with id of output.
        // update color of div as well
    }

    function numberGuessGame(min, max) {
        // see logic and code above
        //console.log ("let the game begin");
        //console.log("min " + min + "max " + max);
         
        let num = Math.ceil(randomNumber(min, max));
        console.log(num);
        // declare message variable with something like , "I'm thinking of a number between 'min' and 'max', try to guess it"
        let message = "I'm thinking of a number between" + min + "and " + max + " try to guess it."
        //let guess = parseInt(prompt(message));
        let guess;
        do {
            guess = parseInt(prompt(message));
            console.log(guess);
        if (guess < num) {
            message= "Guess is too low. try again!";
            guess = parseInt(prompt(message));
        }
        if (guess > num) {
            message= "Guess is too high. try again!";
            guess = parseInt(prompt(message));
        }
         if (isNan(guess)) {
           break;
        }
        } while(guess !== num);
    updateDOM('CONGRATULATIONS!!! ' + guess + ' is correct', 'green');
    
    }
    function randomNumber(min, max) { 
        return Math.random() * (max - min) + min;
    } 
    

    