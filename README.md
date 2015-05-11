#TickyTacky
### Objects and flow
Game object *should control most of the gameflow, delegate turns, and watch for victory conditions*

Player object *keeps track of wins, player tokens*

Board object *builds/destroys board, keeps track of piece locations*

###Some struggles
I had troubles around line 95 trying to access my game object via this inside of a foreach array.  It took me 30 minutes or so to figure out the solution, after I realized from using the debugger that it was inside global scope.

Also had trouble with scoping, there were a number of times when I used a variable inside an anonymous function, and didn't realize that the new value was being preserved.

### Technologies Used
*What technologies did you use while developing this project?*

###Existing features
*What features does your new tic-tac-toe app have?*

###Planned features
*What changes would you make to your project if you continued with it in the future?*
