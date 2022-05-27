/* It's creating an array of programs that the user can access. */
let programs = [
  30295, // display delaware easter egg
  42069, // display meme easter egg
];

/* Setting the variable `totalTries` to 0. */
let totalTries = 0;
/* Setting the maximum number of tries the user has to 3. */
const maximumTries = 3;

/**
 * It takes the user's input, checks if it's a number, and if it is, it searches the array for the
 * program.
 */
function getInput() {
  document.getElementById("input").focus();
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
  totalTries++;
  console.log(maximumTries - totalTries + " tries remaining");
  if (totalTries >= maximumTries) {
    lockUser();
  }
}

/**
 * If the user enters the wrong password more than three times, the search bar will be hidden.
 */
function lockUser() {
  console.log("too many tries, locking user out of the terminal");
  document.getElementById("search").style.display = "none";
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
      totalTries = 0;
      break;
    } else {
      console.log("not the correct program...searching again...");
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
  search.style.display = "none";
}
