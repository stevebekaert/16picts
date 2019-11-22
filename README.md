This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![alt text](https://ibb.co/7CfHNqt)
![Image description](https://ibb.co/7CfHNqt)

# 16-picts

## Game Flow

- People connects to the game
- One people is the drawer. He picks a word to guess. The other sees that game gas started.
- Time to play : find the word. No clues, hard way.
- One someone guessed the word, the game stops.
- Game over is time is over.

## Before playing locally...

Make sure to have a key for the giantbomb API. If you don't have any, don't worry, simply create an account on https://www.giantbomb.com/api/ and replace in the server provided the key needed.

## Install

Clone the project and run 
```
npm install
```

Once everything is installed, launch the game in console by running 

``` 
npm start
```

## Available pages

In the project directory, you can run:

### `Homepage`


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `GameGuesser`

Use the button **Play** to launch the game as a guesser. At the moment, there is only one game created and an unlimited of people that are allowed to be connected.
Note that the game guesser has to wait the game drawer to choose its word to be guessed in order to play.

### `GameDrawer`

Use the button **Create Game** to launch the game as a drawer. You'll directly be welcomed by a word to pick. This will launch the game.

### `Pay attention, disconnection of player is not yet implemented !`

**Note: One-way operation. Once you `close the page`, it will create automatically a random user !! Your current user won't be disconnected.**

No `save the game` has been implemented yet. This will not be fixed.

## About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
