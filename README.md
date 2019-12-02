# Kitty vs Wool: THE GAME

The code has 2 versions. 1 without classes and 1 refactored with classes. Check the difference between them by switching between commits. The class try to encapsulate separate game elements as much as possible. This leads to a better structure and therefore to better maintenance and less bugs. 

Also take a look at the keybindings. This is how you can control your player. An optional mouse control approach is commented out. Note that in that case we need to do the collision detection on mouse move. That's still left to do. Another interesting part might be the colission detection. The game instance monitors all the balls of wool. Every time a key is being pressed, the game instance checks if the kitty is colliding for each of the pieces of wool.