

 // Prompts the user for input with a text box and validates it
 // No input parameters
 // Returns an integer between 0 and 2 based on user's selection

var getUserInput = function() {

	var userInput = "";
	var userChoice = -1; 
	

	while (userChoice == -1) {

		userInput = prompt("Please choose Rock, Paper, or Scissors"); 

		if(userInput === "rock" || userInput ==="Rock") {
			userChoice = 0;
		}
		else if (userInput === "paper" || userInput ==="Paper") {
			userChoice = 1;
		}

		else if (userInput === "scissors" || userInput == "Scissors"){
			userChoice = 2;
		}
		else {

			alert("Invalid Entry, Please check your spelling and try again");
		}
	}	
	


	
	console.log(userChoice);
	return userChoice;

}


 // Stores and returns an array with all potential outcomes
 // No input parameters
var createGameArray = function() {
	gameArray = new Array(3)
	gameArray[0] = new Array(3)
	gameArray[0][0] = "You chose rock, the computer chose rock, it's a tie.."
	gameArray[0][1] = "You chose rock, the computer chose paper, the computer wins!"
	gameArray[0][2] = "You chose rock, the computer chose scisscors, you win!"
	gameArray[1] = new Array(3)
	gameArray[1][0] = "You chose paper, the computer chose rock you win!"
	gameArray[1][1] = "You chose paper, the computer chose paper, it's a tie.."
	gameArray[1][2] = "You chose paper, the computer chose scissors, the computer wins!"
	gameArray[2] = new Array(3)
	gameArray[2][0] = "You chose scissors, the computer chose rock, the computer wins!"
	gameArray[2][1] = "You chose scissors, the computer chose paper, you win!"
	gameArray[2][2] = "You chose scissors, the computer chose scissors, it's a tie.."

	return gameArray;
}

 // Selects a random number between 0 and 1, converts it to an integer between 0 to 2
 // No input parameters
 // Returns an integer between 0 and 2 to store as the computer's selection
var getComputerChoice = function() {
	var computerChoice = 0;
	computerChoice = (Math.floor(Math.random() * 3));
	return computerChoice;
}



$(document).on('ready', function() {
	

	//Event handler to initialize game, linked to 'Play!' button
	$('#play-button').on('click', function() {


		var gameMatrixArray = [];
		var user = 0;
		var computer = 0;
		var gameResultString = "";
		var again = "no";

		do{
		gameMatrixArray = createGameArray();
		user = getUserInput();
		computer = getComputerChoice();
		gameResultString = gameMatrixArray[user][computer];

		alert(gameResultString)
		again = prompt("Would you like to play again? Type yes to continue, anything else to exit")


		}while (again ==="yes");



	})
});





