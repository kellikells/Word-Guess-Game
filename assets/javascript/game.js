
// once the <body> loads, it runs this function
function pageElementsFirst() {

    // variables for game stats
    let wins = 0;
    let guessesLeft = 15;

    // arrays to hold blanks & correct guesses & wrong guesses
    let hiddenArray = [];
    let guessesSoFar = [];


    // array of all letters that could be part of the answer
    const alphabet = ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const answerChoices = ['rick', 'morty', 'beth', 'summer',
        'jerry', 'pencilvester', 'sleepygary', 'misterbeauregard'];

    // ---------------FUNCTION------
    //funcion to generate random computer choice in var, answer
    //---- call this function when-----document load,-- loss,-- win------
    let answer = function () {
        let word = answerChoices[Math.floor(Math.random() * answerChoices.length)];
        return word;
    }
    let finalAnswer = answer();

    let displayBlankSpaces = function () {
        let blankSpaces =[];
        for (let i = 0; i < finalAnswer.length; i++) {
            blankSpaces.push("__ ");
        }
        console.log(hiddenArray);
    }
       

    // ON DOCUMENT LOAD - RUN THIS FUNCTION TO SET UP FIRST WORD
    answer();
    (console.log("HERE IS THE FINAL ANSWER " + finalAnswer));
    displayBlankSpaces();
    console.log("here are the blanks for this round" + hiddenArray);



    // ------------- user presses a key-------------



    document.onkeyup = function (whatKey) {

        // when key is pressed, stored this value in var, userGuess ----  
        let userGuess = whatKey.key;
        console.log(userGuess);


        //---------- function to put correct Letter in place
        let placeLetter = function () {
            let answerSplit = finalAnswer.split("");
            let letterIndexInAnswer = answerSplit.indexOf(userGuess);
            // let hiddenArray = blanks;

            hiddenArray.splice(letterIndexInAnswer, 1, userGuess);

            document.querySelector('.outputArray').textContent = hiddenArray;

        }
        // checking the key pressed is a letter key-------
        if ((whatKey.keyCode >= 65) && (whatKey.keyCode <= 90)) {

            guessesLeft--;

            //----- these conditions depend on what key was picked vs finalAnswer---------
            // users key matches key in answer-----
            if ((guessesLeft >= 0) && (finalAnswer.includes(userGuess))) {

            /* display this key in appropriate space in HTML*/;
                placeLetter();


                // USER WINS-------
                if ((hiddenArray.includes("__ ")) === false) {
                    alert("you won");
                    wins++;
                    guessesLeft = 15;
                    guessesSoFar = [];
                    answer();
                }
            }

            // user wrong 
            else if ((guessesLeft > 0) && ((finalAnswer.includes(userGuess)) === false)) {
                guessesSoFar.push(userGuess); /*amend the guess to the guessesSoFar*/
            }

            if
                ((finalAnswer.includes(userGuess)) && (guessesLeft > 1)) {
                guessesLeft--;
                console.log("how many guesses I have left " + guessesLeft);
                guessesSoFar.push(userGuess);
                console.log(guessesSoFar);
            }

            // user loses
            else {
                guessesLeft = 15;
                guessesSoFar = [];
                answer();
            }
        }
    }

    // connect to HTML so stats are viewable
    let winsText = document.getElementById("wins");
    let guessesLeftText = document.getElementById("guesses-left");
    let guessesSoFarText = document.getElementById("guesses-so-far");
    let hiddenArrayText = document.getElementsByClassName("outputArray");



    // html display

    winsText.textContent = "Wins: " + wins;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses So far: " + guessesSoFar;
    hiddenArrayText.textContent = hiddenArray;



}