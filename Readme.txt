                                                                            SIT708
                                                                        Mobile System Development
                                                                      Name: Ajay Prabhu Veerapandian
                                                                       SID: SID218379094
                                                                  App Name: Eidetic Memory

Overview:

           Eidetic memory is the ability of a person to recollect and remember with high precision even after spending a considerable amount of time. This game is named so because it helps train the player to recollect the directions of a route to the destinations promoted in the game.  Among the many famous places in Melbourne, six places( as of now) are chosen and displayed in the game.(st.kilda Beach, Avalon Airport, Tullamarine Airport, phillip Island, Twelve Apostles, Mornington Peninsula).

           The player is assumed to start the game from Flinder's street. Instructions to get to get to one of the six destinations from Flinder's street  are captured and displayed to the user on selection of a destination. After the player is done reading the instructions, the player will be prompted to select the correct direction for each instruction in the correct order. Based no the difficulty(Easy, Medium, Hard) chosen by the player, the chances are provided for invalid selection of directions. Once the player chooses all the correct directions in order, the level is complete. The player can get back to start page of the game to play new levels.

Features:

          1. The game has 6 levels in terms of locations with 3 difficulties for each level making it playable for 18 different scenes.

          2. The game does not have an age barrier, although children above age 6 can find it more interesting and playable.

          3. Each level has different set of instructions making the player to remember combinations of directions. The higher the number of instructions, the more challenging it would be for the player to win the level.

          4. The game has a star rating system, that rates players with 5 stars after completing a level. This is based on two factors of the game.
                                        a. Chosen difficulty
                                        b. Chances remaining.

          5. The star rating enables players to gain complete 5 star rating for each level making the game playable again and again.

          6. The game supports both desktop and mobile(landscape and portrait mode) versions.

          7. All the textual contents that can be selected by the player in the game are animated.

          8. If the player selects a wrong direction, the chances remaining reduces with an animated red colour background.

          9. If a player loses in any level, the animation effects pop in increasing and decreasing the font size of "Game Over".

          10. The game is developed in a way that more places can be added in the game with very little effort in the future by only adding the instructions to a file in a specific format. All the necessary inputs for the game based on the instructions will be fetched dynamically.

          11. The game draws lines in accordance to the correct direction selected by the player through a canvas in the game screen. Each level has a different start point and end point inside the canvas based entirely on the direction.

          12. All the animations in the game blends in with each selection without disrupting the flow of the game.

          13. Since all the instructions are real time rendered directions, the player can find it helpful in real life if the player is travelling to any one of these places.


API References:

------------------------------------------Game Locations Page:----------------------------------------------------------------------------------------------
          * function name : createGameLocations()
          * Action: The function fetches the details of places to be populated in the game and appends it to a div element.
                    The images are split into two with one batch on the   left and the other to the right.

          * Once the player clicks the "Let us remember" button, the game locations along with their images are displayed in two aligned panes.
          * All the places to be rendered in the game are placed inside "gameLocation.js" file inside an array with file name and file location.

                    foreach(locationObject in gameLocationArray) {
                      if (indexOf(gameLocationArray[locationObject]) < (gameLocationArray.length / 2)) {
                          1. create <div> element
                          2. create heading using locationObject.name
                          3. create image using locationObject.fileLocation
                          4. Assign locationObject.name as the id for div,heading and image elements
                          5. Append image and heading to the div.
                          6. Append the div to the div outside foreach loop.
                      }else {
                          1. create <div> element
                          2. create heading using locationObject.name
                          3. create image using locationObject.fileLocation
                          4. Assign locationObject.name as the id for div,heading and image elements
                          5. Append image and heading to the div.
                          6. Append the div to the div outside foreach loop.
                      }
          * (gameLocationArray.length / 2) - This will split all the locations in two equal halves on the left and right side for proper alignment.


------------------------------------------Instructions page:--------------------------------------------------------------------------------------------------
          * function name : showRouteForTheSelectedLocation()
          * Action: The function fetches all the instructions stored inside and appends each instruction to a list item of an unOrderedList.

          * Instructions for the selected route will be from the data inside js file of the specific location.
          * destination is a global variable that is obtained from the id of the selected place.
          * window[destination] is the variable name of the selected place

                    foreach ( route in window[destination]) {
                        1. window[destination][route]["Instruction"] - fetches the instruction for the route.
                        2. window[destination][route]["distance"] - fetches the distance for the route
                        3. window[destination][route]["Unit"] - fetches the Unit for the route
                        4. window[destination][route]["direction"] - fetches the direction for the route.
                        5. Append all the fetched variables inside instruction variable.
                        6. create a list item for the instruction and append it to the unodered list variable outside the for loop.
                    }
------------------------------------------Select Difficulty Page:--------------------------------------------------------------------------------------------------
          * function name : createdifficultyHeading()
          * Action: Displays three options (Easy, Medium, Hard) to be selectable to the player.

          * Populate and enable click functionalities for the difficulty.

                for (chance in options) {
                      1. create heading with option.difficulty[chance]
                      2. create <div> element
                      3. Append option.difficulty[chance] as the id of the heading element
                      4. on the click of each difficulty call the function displayGameControls().
                      5. Append the heading to the div element.
                      6. Append the div element to the outer div element.
                  }
------------------------------------------Game page:---------------------------------------------------------------------------------------------------------------

          * function name : displayGameControls()
          * Action: Displays the 3 images of arrows facing different directions (left, right, up) to be selectable to the player.

          * Assign targetid of the selected difficulty to a variable "difficulty".
          * call createControls() function - creates the 3 arrows for playing the game
          * call createGame() function - creates a <canvas> element and line canvas inside which the direction movement happens.


          * function name: validateSelection()
          * Action: Validates the input of the player based on the arrow selected to either
                    1. move the line in the canvas
                                or
                    2. reduce the chances remaining for the player based on the selected difficulty.

          * if (selectedDirection == window[destination][counter].direction) { // the direction of the each instruction is traversed and validated with selected direction.
                  ---- true----
                1. Assign directionIP = selectedDirection; ---- directionIP is the direction in progress
                2. Assign offset variable as 100; ---- length of the line on each traversal
                3. determine the directionToGo by calling directionChange function and providing the current direction as parameter.
                4.     if (directiontoGo == "Up")
                          xPosition stays the same and offset is subtracted from the previousy position to get the current yPosition that moves the lineCanvas
                5.      if (directiontoGo == "Down") {
                          xPosition stays the same and offset is added to the previousy position to get the current yPosition that moves the lineCanvas
                6.      else if (directiontoGo == "Right") {
                          yPosition stays the same and offset is added to the previousx position to get the current xPosition that moves the lineCanvas
                7.      else if (directiontoGo == "Left") {
                          yPosition stays the same and offset is subtracted from the previousx position to get the current xPosition that moves the lineCanvas
                8.        if (xPosition > previousx)
                          assign previous direction as "right"
                9.        else if (xPosition < previousx)
                          assign previous direction as "Left"
                10.        else if (yPosition > previousy)
                          assign previous direction as "Down "
                11.        else if (yPosition < previousy)
                          assign previous direction as "Up"
                12.        Assign a boolean value isInitialDirection as false.
                13.        Use the lineCanvas object to create the line with obtained x and y positions of x.
                14.        Assign the current x and y positions to the previous x and y positions
                15.        if (counter == (window[destination].length-1)) ---- if the counter is equal to the index of the last instruction.
                                call gameWon function
                16.       else
                          Increase counter by 1.
            *   else
            ------ false -----------
                1.   if (difficulty == "Easy")
                        if the chances variable is 0, then call gameOver function.
                      else
                        decrease chances variable by 1
                        call changeChancesRemaining function. -- to display the altered chances remaining to the player.
                2. else if (difficulty == "Medium")
                        if the chances variable is 0, then call gameOver function.
                      else
                        decrease chances variable by 1
                        call changeChancesRemaining function. -- to display the altered chances remaining to the player
                3. else --- difficutly is "Hard"
                      chances = 3;
                      call gameOver function.


          * function name: directionChange()
          * Action: changes the direction of the line canvas movement according to the selection.
                    After taking a left or right if the direction to progress is straight, then the current left or right is the straight.
                    This is manipulated in the function.
          *  if isInitialDirection is true
                then assign currentDirection to directionToReturn variable
             if isInitialDirection is false
                then if previousDirection is "Up"
                    if (currentDirection == "Left") directionToReturn = "Left";
                    else if (currentDirection == "Right") directionToReturn = "Right";
                    else if (currentDirection == "Straight") directionToReturn = "Up";
                if previousDirection is "Down"
                    if (currentDirection == "Down") directionToReturn = "Right";
                    else if (currentDirection == "Right") directionToReturn = "Left";
                    else if (currentDirection == "Straight") directionToReturn = "Down";
                if previousDirection is "Left"
                    if (currentDirection == "Left") directionToReturn = "Down";
                    else if (currentDirection == "Right") directionToReturn = "Up";
                    else if (currentDirection == "Straight") directionToReturn = "Left";
                if previousDirection is "Right"
                    if (currentDirection == "Left") directionToReturn = "Up";
                    else if (currentDirection == "Right") directionToReturn = "Down";
                    else if (currentDirection == "Straight") directionToReturn = "Right";

------------------------------------------Game Won page:----------------------------------------------------------------------------------------------------------
          * function name: gameWon()
          * Action: Displays complete stars after the player successfully completes each level of the game.

          * display congratulations messages.
          * Easy difficulty - Maximum of 3 stars and minimum of 1 star
                if (difficulty == "Easy") {
                  if (chancesRemaining == 3) {

                    1.create 3 complete stars and 2 empty stars

                  } else if (chancesRemaining == 1 or 2) {

                    2.create 2 complete stars and 3 empty stars

                  } else {

                    3.create 1 complete stars and 4 empty stars

                  }
                }

            * Medium difficulty - Maximum of 4 stars and minimum of 2 stars
                 if (difficulty == "Medium") {
                  if (chances == 1) {
                      1.create 4 complete stars and 1 empty stars
                  } else if (chances == 0) {
                      1.create 3 complete stars and 2 empty stars
                  }else {
                      1.create 2 complete stars and 3 empty stars
                  }
                }
            * Hard difficulty - 5 complete stars
                  else {
                      1.create 5 complete stars
                  }
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Supported Browsers:
      1. Google Chrome
      2. Mozilla Firefox
      3. Opera
