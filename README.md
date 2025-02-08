## Memory Card Game

### how it works
1. there are multiple images of different characters
2. you click on any of them
3. you can't click on any character twice, this resets your score
4. you can only click a character once and that increments your score
5. you win if you clicked on all the characters once

### implementation
- get characters from the jikan api and store them in an array
- randomize the 'characters' array and display the characters on the page
- on clicking a character, store the character's id in a 'seen' array
- also check if the id already exists in the 'seen' array
    - if true -> display game over and restart the game
    - if false -> update the score and randomize the 'characters' array again
- if the 'seen' array's length reaches the 'characters' array length then display a 'you win' message and a button to restart the game
- also display the current score and best score somewhere in the ui
