function number_game() {
	var max = prompt("Choose a maximum range for the random number");
	var guess = prompt("Guess which number it is");

	var random_number = Math.floor(Math.random()*max+1);
	console.log("Answer is: " + random_number);

	while (guess != random_number) {
		guess = prompt("Wrong, guess again");
	}

	alert("Correct!");
}