/*
* Global variables Declaration
*/
window.counter = 0;
//Global variable to store previous x position of the line canvas
window.previousx;
//Global variable to store previous y position of the line canvas
window.previousy;
//Global variable to store previous traverse direction of the line canvas
window.previousDirection;
//Global variable to store currently chosen direction of the line canvas
window.currentDirection;
//Global variable to store which direction the canvas has to move based on the previous and current directions chosen
window.directiontoGo;
//Global variable to store the current x position of the canvas after moving in selected direction
window.xPosition;
//Global variable to store the current y position of the canvas after moving in selected direction
window.yPosition;
//Global variable to store the first direction that the user chooses on any given route
window.firstdirection;
//Global variable that stores a boolean value to flag if the direction input by the player is the initial direction
window.isInitialDirection;
//Global variable to depict a line canvas which shows the player's route in the game
window.lineCanvas

/* loadGame description
This function creates all the containers required to load the game.
*createGameContainer() - calls the function which creates a div to show the game header
*createPlayButton() -calls the function which creates the play button on the initial game screen.
createTagLineContainer()- calls the function which creates div to display the tagline of the game.
*/
window.loadGame = function() {
  createGameContainer();
  createPlayButton();
  showFrontPageImage();
  CreateFrontButtonAndImage();
  createTagLineContainer();
}


/* createGameContainer description
createGameContainer() function creates a div to show the game header
* Function Call - createGameContainer()
*/
window.createGameContainer = function() {
  window.gameContainer = createDiv();
  gameContainer.classList.add("headingStyle");
  var gameHeading = createHeading1("Eidetic Memory");
  gameContainer.appendChild(gameHeading);
  document.body.appendChild(gameContainer);
}


/* createTagLineContainer Description
* this function creates a div to display the tagline of the game "Remembering is fun".
Function call -createTagLineContainer()
*/
window.createTagLineContainer = function() {
  // This is for creating the Instructions below the game heading
  window.instructionsContainer = createDiv("headingStyle");

  var instructionHeading = createHeading1("I am at Flinder's street. I would like to visit the most important places in and around Melbourne. Can you guide me to take my turns?");
  instructionHeading.setAttribute("style","font-size: 25px");
  instructionsContainer.appendChild(instructionHeading);
  document.body.appendChild(instructionsContainer);
}


/*createPlayButton description
* this function creates the play button on the initial game screen. The play button contains a text "Let us Remember".
This function calls createGameLocations() which creates the 6 locations from which player can select 1 and proceed to the game.
Function call - createPlayButton()
*/
window.createPlayButton = function() {
  // This is for creating the play button
  var playButton = createButton();
  window.playbtnContainer = createDiv();
  var center = document.createElement("center");
  playbtnContainer.classList.add("buttonStyle");
  playButton.textContent = "Let us Remember!"
  playbtnContainer.appendChild(playButton);
  center.appendChild(playbtnContainer);
  // document.body.appendChild(center);
  // the three containers are passed to the click function inside an object.
  playbtnContainer.onclick = function() {
    resetWelcomeForm({
      frontPageImage: frontPageImageContainer,
      playbtnContainer: gameContainer,
      instructionsContainer: instructionsContainer
    });
    createGameLocations();
  }
}

/*showFrontPageImage description
* this function creates imports the frontpage image and appends it to a <div> element".
This function calls createImage() and createDiv() functions to create the respective elements
Function call - showFrontPageImage()
*/
window.showFrontPageImage = function(){
  window.frontPageImage = createImage("images/thinker.png");
  window.frontPageImageContainer = createDiv();
  frontPageImageContainer.classList.add("frontPageImage");
  frontPageImageContainer.appendChild(frontPageImage);
}

/*CreateFrontButtonAndImage description
* This function creates a <div> element and appends frontPageImage and playbtnContainer to the body of the document
This function calls createDiv() to create the container(<div> element).
Function call - CreateFrontButtonAndImage()
*/
window.CreateFrontButtonAndImage = function(){
  window.frontButtonAndImage = createDiv();
  frontButtonAndImage.appendChild(frontPageImageContainer);
  frontButtonAndImage.appendChild(playbtnContainer);
  frontButtonAndImage.setAttribute("style","display: flex;");
  document.body.appendChild(frontButtonAndImage);
}


/* createGameLocations Description
* createGameLocations function is used to create the game level selection page displaying different locations among which the player can select one for route exploration.
* When user clicks on one location, route instructions for that location is shown by calling the click event of the image showRouteForTheSelectedLocation
* Function call - createGameLocations()
*/
window.createGameLocations = function() {
  window.leftLocationsContainer = createDiv("leftLocation");
  window.rightLocationsContainer = createDiv("rightLocation");

  for (var i = 0; i < gameLocation.length; i++) {
    var locationName = gameLocation[i].name;
    var id = gameLocation[i].name.replace(/\s/g, '');;

    if (i < (gameLocation.length / 2)) { // To split the images into two equal halves in the screen

      var leftLocationDiv = createDiv();
      leftLocationDiv.id = id
      leftLocationDiv.classList.add("leftImages");

      var leftLocationNames = createHeading3(locationName);
      leftLocationNames.id = id

      var leftLocationImgs = createImg(gameLocation[i].fileLocation, locationName);
      leftLocationImgs.id = id
      leftLocationImgs.classList.add(id);

      leftLocationDiv.appendChild(leftLocationImgs);
      leftLocationDiv.appendChild(leftLocationNames);
      leftLocationsContainer.appendChild(leftLocationDiv);

      //creates a click event to call "showRouteForTheSelectedLocation" function each time the <div> element is clicked.
      leftLocationsContainer.addEventListener("click", showRouteForTheSelectedLocation);
    } else {
      var rightLocationDiv = createDiv();
      rightLocationDiv.classList.add("rightImages");
      rightLocationDiv.id = id;

      var rightLocationNames = createHeading3(locationName);
      rightLocationNames.id = id;

      var rightLocationImgs = createImg(gameLocation[i].fileLocation, locationName);
      rightLocationImgs.classList.add(id);
      rightLocationImgs.id = id;

      rightLocationDiv.appendChild(rightLocationImgs);
      rightLocationDiv.appendChild(rightLocationNames);
      rightLocationsContainer.appendChild(rightLocationDiv);

      rightLocationsContainer.addEventListener("click", showRouteForTheSelectedLocation);
    }
  }
  document.body.appendChild(leftLocationsContainer);
  document.body.appendChild(rightLocationsContainer);
}

/* showRouteForTheSelectedLocation Description
* showRouteForTheSelectedLocation function loads the route to the specific location selected by the user. After displaying instructions this function loads the difficulty selection section
* Function call - showRouteForTheSelectedLocation()
*/
window.showRouteForTheSelectedLocation = function() {
  window.destination = event.target.id.toLowerCase();
  console.log("Location Information Received: " + destination);

  leftLocationsContainer.remove();
  rightLocationsContainer.remove();

  window.unOrderedList = createUnOrderedList("unOrderedList");
  for (var i = 0; i < window[destination].length; i++) { //window[location] is used to get global variable dynamically by string

    var instruction = window[destination][i]["Instruction"] + "-" + window[destination][i]["distance"] + window[destination][i]["Unit"] + "-----" + window[destination][i]["direction"];
    var listItem = createListItem(instruction);
    unOrderedList.appendChild(listItem);
  }

  window.selectdifficultyButton = createButton("Proceed to choose difficulty");
  selectdifficultyButton.onclick = function() {
    displaySelectDifficulty();
  };

  document.body.appendChild(unOrderedList);
  document.body.appendChild(selectdifficultyButton);
}


/* displaySelectDifficulty Description
* displaySelectDifficulty function difficulty selection options from which the player can select one.
* Function call-displaySelectDifficulty()
 */
window.displaySelectDifficulty = function() {
  selectdifficultyButton.remove();
  unOrderedList.remove();
  createdifficultyHeading();
}

/* resetWelcomeForm Description
* resetWelcomeForm function is used to remove all the contents inside the welcomeForm
* Doing so will be useful to create the game level selection page that contains all the places
  to be selected for route exploration
* @param {object} playbtnContainer- the <div> element that contains the play button to start the game
* @param {object} instructionsContainer- the <div> element that contains the text "GUIDE AND GET GUIDED!!!"
*/
window.resetWelcomeForm = function() {
  this.frontPageImage.remove();
  this.playbtnContainer.remove();
  this.instructionsContainer.remove();

}


/* createdifficultyHeading Description
 * this function creates three <div> elements with three <h1> tags one for each div.
 * No parameters are used.
 */
window.createdifficultyHeading = function() {
  window.difficultyContainer = createDiv();
  difficultyContainer.classList.add("headingStyle");
  var selectDifficultyHeading = createHeading1("SELECT DIFFICULTY");
  difficultyContainer.appendChild(selectDifficultyHeading);
  document.body.appendChild(difficultyContainer);

  window.difficultyLevelsContainer = createDiv();
  for (i = 0; i < options.chances.length; i++) {
    var difficulties = options.difficulty[i];
    console.log("difficulty: " + difficulties);
    window.difficultyHeading = createHeading2(difficulties);
    difficultyHeading.id = difficulties;
    difficultyHeading.classList.add("difficultyLevel");
    difficultyHeading.classList.add("headingStyle");
    difficultyHeading.onclick = function() {
      displayGameControls();
    }
    difficultyLevelsContainer.appendChild(difficultyHeading);
  }
  document.body.appendChild(difficultyLevelsContainer);
}

/* displayGameControls description
*This function sets the initial positions for the line canvas and invokes createControls() and createGame() functions which loads the game screen for the player.
*No input parameters
*/
window.displayGameControls = function() {
  difficultyContainer.remove();
  difficultyLevelsContainer.remove();

  window.difficulty = event.target.id;

  if (counter == 0) {
    if (window[destination].length > 10) {
      previousx = 900;
      previousy = 900;
      isInitialDirection = true;
    }else {
      previousx = 500;
      previousy = 500;
      isInitialDirection = true;
    }

  }
  createControls();
  createGame();
}


/* createControls description
* this function loads the game controls such as the direction arrows used for the navigation, the questions displayed to the players
* this function invoking various methods to keep track of the chances remaining for the player and the arrow click events
* No input parameters
This parameter
*/
window.createControls = function() {
  window.controlsContainer = createDiv("controlsContainer");

  window.leftArrow = createLeftArrow();
  leftArrow.addEventListener("click", validateSelection);
  window.upArrow = createUpArrow();
  upArrow.addEventListener("click", validateSelection);
  window.rightArrow = createRightArrow();
  rightArrow.addEventListener("click", validateSelection);

  window.questionHeading = createHeading1("Which way should I go?");
  questionHeading.classList.add("headingStyle");

  window.chancesRemaining = createParagraph();
  chancesRemaining.classList.add("headingStyle");
  setChancesRemaining();

  controlsContainer.appendChild(questionHeading);
  controlsContainer.appendChild(leftArrow);
  controlsContainer.appendChild(upArrow);
  controlsContainer.appendChild(rightArrow);

  document.body.appendChild(chancesRemaining);
  document.body.appendChild(controlsContainer);
}

/*createLeftArrow description
* This method creates a div for the left arrow control and also appends the arrow image to the div.
*No parameter required
Function call - createLeftArrow()
*/
window.createLeftArrow = function() {
  var outerDivContainer = createDiv("row-left");
  var arrowImage = createImg("Images/leftArrow.png", "Left Arrow");

  outerDivContainer.id = "Left";
  arrowImage.id = "Left";

  outerDivContainer.appendChild(arrowImage);

  return outerDivContainer;
}

/*createRightArrow description
* This method creates a div for the right arrow control and also happens the arrow image to the div.
*No parameter required
Function call - createRightArrow()
*/
window.createRightArrow = function() {
  var outerDivContainer = createDiv("row-left");
  var arrowImage = createImg("Images/rightArrow.png", "Right Arrow");

  outerDivContainer.id = "Right";
  arrowImage.id = "Right";

  outerDivContainer.appendChild(arrowImage);

  return outerDivContainer;
}

/*createUpArrow description
* This method creates a div for the Up arrow control and also happens the arrow image to the div.
* No parameter required
* Function call - createUpArrow()
*/
window.createUpArrow = function() {
  var outerDivContainer = createDiv("row-left");
  var arrowImage = createImg("Images/upArrow.png", "Up Arrow");

  outerDivContainer.id = "Straight";
  arrowImage.id = "Straight";

  outerDivContainer.appendChild(arrowImage);

  return outerDivContainer;
}

/* createGame description
* This function creates the canvas required for the game screen .
* also sets the initial line canvas position based on the length of the instructions
* No parameters required
*/
window.createGame = function() {
  window.canvasContext = createCanvas(1000, 1000);
  var lineMoveTo = {
    moveTo:900
  };
  if (window[destination].length >10) {
    lineCanvas = createLineCanvas(canvasContext.context, 900, 900,lineMoveTo);
  }else {
    lineCanvas = createLineCanvas(canvasContext.context, 500, 500);
  }
  console.log("Counter Value: " + counter);

  document.body.appendChild(canvasContext.canvas);
}

/*validateSelection description
* This function validates if the direction selection made by the user is correct.
*  Depending on player's selection, number of chances remaining for the player is also tracked which depends also on the difficulty selected
* Function call - validateSelection()
* No parameters required
*/
window.validateSelection = function() {
  if (chancesRemaining.classList.contains("wrongAnswer")) {
    chancesRemaining.classList.remove("wrongAnswer");
  }
  window.selectedDirection = event.target.id;
  if (selectedDirection == window[destination][counter].direction) {
    var directionIP = selectedDirection;
    if (directionIP != null) {
      currentDirection = directionIP;
    }
    var offset = 100;
    var xPosition;
    var yPosition;
    directiontoGo = directionChange(currentDirection);
    if (directiontoGo == "Up") {
      console.log(previousx, previousy);
      xPosition = previousx;
      yPosition = previousy - offset;
      console.log(xPosition, yPosition);
    }
    if (directiontoGo == "Down") {
      console.log(previousx, previousy);
      xPosition = previousx;
      yPosition = previousy + offset;
      console.log(xPosition, yPosition);
    } else if (directiontoGo == "Right") {
      console.log(previousx, previousy);
      xPosition = previousx + offset;
      yPosition = previousy;
      console.log(xPosition, yPosition);
    } else if (directiontoGo == "Left") {
      console.log(previousx, previousy);
      xPosition = previousx - offset;
      yPosition = previousy;
      console.log(xPosition, yPosition);
    }
    console.log("right answer has been selected");
    if (xPosition > previousx)
      previousDirection = "Right";
    else if (xPosition < previousx)
      previousDirection = "Left";
    else if (yPosition > previousy)
      previousDirection = "Down";
    else if (yPosition < previousy)
      previousDirection = "Up";
    firstdirection = directiontoGo;
    isInitialDirection = false;
    lineCanvas.lineTo(xPosition, yPosition);
    lineCanvas.stroke();
    previousx = xPosition;
    previousy = yPosition;
    if (counter == (window[destination].length-1)) {
      gameWon();
    }else {
      counter = ++counter;
    }
  }else {
    if (difficulty == "Easy") {
      if (chances == 0) {
        gameOver();
      } else {
        chancesRemaining.classList.add("wrongAnswer");
        chances = --chances;
        changeChancesRemaining();
      }
    } else if (difficulty == "Medium") {
      if (chances == 0) {
        gameOver();
      } else {
        chancesRemaining.classList.add("wrongAnswer");
        chances = --chances;
        changeChancesRemaining();
      }
    } else {
      chancesRemaining.classList.add("wrongAnswer");
      chances = 3;
      gameOver();
    }
  }
}

/* setChancesRemaining Description
* This function sets the number of chances left for the player depending on his selection of route.
* The number of chances varies based on the difficulty.
* Function call - setChancesRemaining()
* No return value
*/
window.setChancesRemaining = function(){
  if (difficulty == "Easy") {
    chances = 3;
  }else if (difficulty == "Medium") {
    chances = 1;
  }else {
    chances = 0;
  }
  changeChancesRemaining();
}

/* changeChancesRemaining description
*This function changes the number of chances remaining with the player whenever a wrong selection of route is made.
*Function Call - changeChancesRemaining()
*No parameters required
*/
window.changeChancesRemaining = function(){
    chancesRemaining.innerHTMl = "";
    chancesRemaining.textContent = "Chances Remaining: " + chances;
}

/* gameOver description
*gameOver function validates and ends the game if the user has no chances left to continue the game based on the difficulty level chosen.
*also invokes the even for restarting the game if the player wishes to play again
*Function call - gameOver()
*No parameter required
*/
window.gameOver = function() {
  document.body.classList.add("gameOver");

  removeGameContainer();

  window.gameOverHeading = createHeading1("GAME OVER");
  gameOverHeading.classList.add("gameOverHeading");
  gameOverHeading.classList.add("headingStyle");

  window.endGameInstructionHeading = createHeading2("Number  of chances for the selected difficulty exceeded !!!");
  endGameInstructionHeading.classList.add("headingStyle");

  createRestartButton();

  document.body.appendChild(gameOverHeading);
  document.body.appendChild(endGameInstructionHeading);
  document.body.appendChild(restartButton);
}

window.createRestartButton = function(){
  window.restartButton = createButton("Click here to restart the game!!!");
  restartButton.addEventListener('click',restartGame);
}

/* removeGameContainer() description
*removeGameContainer removes all the controls and canvas created for the game. This function is invoked whenever a game is restarted.
*Function call - removeGameContainer()
*No parameter required
*/
window.removeGameContainer = function(){
  controlsContainer.remove();
  canvasContext.canvas.remove();
  chancesRemaining.remove();
}

/* restartGame description
* restartGame function is used to reload the game
*Function Call -restartGame()
*No parameter is required
*/
window.restartGame = function(){
  document.location.reload(true);
}

/* gameWon description
*gameWon function is used to validate if the player has won the game based on the difficulty and number of chances left for the player. This function invokes createStars function to display number of stars the player has won.
*Function Call -gameWon()
*No parameters required
*/
window.gameWon = function() {
  removeGameContainer();
  window.congratulationsHeading = createHeading1("Congratulations!");
  congratulationsHeading.classList.add("headingStyle");
  document.body.appendChild(congratulationsHeading);

  window.levelCompleted = createHeading1("Level Completed");
  levelCompleted.classList.add("headingStyle");
  document.body.appendChild(levelCompleted);

  if (difficulty == "Easy") {
    if (chances == 3) {
      createStars(3);
    } else if ((chances > 0) && (chances < 3)) {
      createStars(2);
    } else {
      createStars(1);
    }
    } else if (difficulty == "Medium") {
      if (chances == 1) {
      createStars(4);
    } else if (chances == 0) {
      createStars(3);
    }else {
      createStars(2);
    }
  }else {
    createStars(5);
  }
  createRestartButton();
  document.body.appendChild(restartButton);
}

/*createStars description
* createStars function is used to display the number of stars the player has won in the game.
*Function call - createStars(5) //Displays 5 stars
createStars(1) //Displays 1 star
*parameter - @completeStars a numeric value that denotes number of stars the player has earned in the game
*/
window.createStars = function(completeStars){
  var starsDiv = createDiv("stars");
  for (var i = 0; i < completeStars; i++) {
    var starsComplete = createImg("images/starComplete.png");
    starsComplete.classList.add("star");
    starsDiv.appendChild(starsComplete);
  }
  for (var i = 0; i < (5 - completeStars); i++) {
    var starsEmpty = createImg("images/starEmpty.png");
    starsDiv.appendChild(starsEmpty);
    starsEmpty.classList.add("star");
  }
  document.body.appendChild(starsDiv);
}

/* directionChange Description
* directionChange function is used to return the direction in which the line canvas should move based on the player's input from the UI.
Based on the previous direction of line canvas and the new direction that the player chooses, this function returns whether the canvas has to move up,down,left or right.
* @param {object} currentdirection - the direction chosen by the player in the frontend
*Return - This function returns the directiontoGo value- "Up","Down","Left","Right"
*Function Call - Examples to call this function
1) directiontoGo =directionChange("Straight")
2) directiontoGo=directionChange("Left")
*/
function directionChange(currentDirection) {
  var directionToReturn;
  if (isInitialDirection) {
    if (currentDirection == "Left") directionToReturn = "Left";
    else if (currentDirection == "Right") directionToReturn = "Right";
    else if (currentDirection == "Straight") directionToReturn = "Up";
  } else {
    switch (previousDirection) {
      case "Up":
        {
          if (currentDirection == "Left") directionToReturn = "Left";
          else if (currentDirection == "Right") directionToReturn = "Right";
          else if (currentDirection == "Straight") directionToReturn = "Up";
        }
        break;
      case "Down":
        {
          if (currentDirection == "Left") directionToReturn = "Right";
          else if (currentDirection == "Right") directionToReturn = "Left";
          else if (currentDirection == "Straight") directionToReturn = "Down";
        }
        break;
      case "Left":
        {
          if (currentDirection == "Left") directionToReturn = "Down";
          else if (currentDirection == "Right") directionToReturn = "Up";
          else if (currentDirection == "Straight") directionToReturn = "Left";
        }
        break;
      case "Right":
        {
          if (currentDirection == "Left") directionToReturn = "Up";
          else if (currentDirection == "Right") directionToReturn = "Down";
          else if (currentDirection == "Straight") directionToReturn = "Right";
        }
        break;
      default:
    }
  }
  return directionToReturn;
}



window.onload = loadGame;
