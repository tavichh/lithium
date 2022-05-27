let programs = [
  30295, // display delaware easter egg
  42069, // display meme easter egg
];

/**
 * It takes the user's input, checks if it's a number, and if it is, it searches the array for the
 * program.
 */
function getInput() {
  let input = document.getElementById("input").value;
  console.log("the user entered " + input);
  if (isNaN(input)) {
    console.log("this is not a valid number. resetting...");
    document.getElementById("input").value = "";
  } else {
    console.log("this is a valid number. will now search for the program...");
    input = parseInt(input);
    searchArray(input);
  }
}
/**
 * It searches the array for the input, and if it finds it, it displays the program
 * @param input - the value of the input field
 */
function searchArray(input) {
  for (let i = 0; i < programs.length; i++) {
    if (input == programs[i]) {
      console.log("found the program!");
      displayProgram(input);
      break;
    } else {
      console.log("program not found. resetting...");
      document.getElementById("input").value = "";
    }
  }
}

/**
 * When the user clicks the button, the search window will disappear and the program will be displayed
 * @param input - the input from the user
 */
function displayProgram(input) {
    let search = document.getElementById("search");
    search.style.display="none";
}
