
// once the <body> loads, it runs this function
function pageElementsFirst() {

    // variables for game stats
    const wins = 0;
    const guessesLeft = 15;
    const guessesSoFar = [];

    // connect to HTML so stats are viewable
    const winsText = document.getElementById("wins");
    const guessesLeftText = document.getElementById("guesses-left");
    const guessesSoFarText = document.getElementById("guesses-so-far");
    
    // array of all letters that could be part of the answer
    const alphabet = ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const answerChoices = ['rick', 'morty', 'beth', 'summer',
     'jerry','pencilvester', 'sleepygary', 'misterbeauregard']

    // word picked for a round
    const answer;

    // ---------------FUNCTION------
    //funcion to generate random computer choice in var, answer
    //---- call this function when-----document load,-- loss,-- win------
    function generateAnswer() {
        answer = answerChoices[Math.floor(Math.random() * answerChoices.length)];
    };

    generateAnswer();
    console.log("the word for this round is " + answer);
    // --------------Game starts once user presses a key-------------
    document.onkeyup = function(whatKey) {

        // when key is pressed, stored this value in var, userGuess ----  
        const userGuess = whatKey.key;
        console.log(userGuess);

        // checking the key pressed is a letter key-------
        if ((whatKey.keyCode >= 65) && (whatKey.keyCode <= 90)) {
            
            guessesLeft--;

//----- these conditions depend on what key was picked vs answer---------


            // users key matches key in answer-----
            if ((guessesLeft >= 0) && (userGuess ===  /*a letter in the answer*/)) {
                /* display this key in appropriate space in HTML*/;


                // USER WINS-------
                if (/*entire answer displayed in HTML*/) {
                    guessesLeft = 15;
                    guessesSoFar = [];
                    generateAnswer();
                }
 

            // user wrong 
            else if ((guessesLeft > 0) && (userGuess !==  /*a letter in the answer*/)) {
                guessesSoFar.push(userGuess); /*amend the guess to the guessesSoFar*/
            }
                
                
                
                (userGuess !== answer) && (guessesLeft > 1)) {
                guessesLeft--;
                console.log("how many guesses I have left " + guessesLeft);
                guessesSoFar.push(userGuess);
                console.log(guessesSoFar);
            }

            // user loses
            else {
                losses++;
                guessesLeft = 9;
                guessesSoFar = [];
                console.log("how many times i lost" + losses);
                generateAnswer();
            }
        }

        // html display

        winsText.textContent = "Wins: " + wins;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        guessesSoFarText.textContent = "Guesses So far: " + guessesSoFar;
    }
}