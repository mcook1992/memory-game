import React, { Component } from "react";
import Card from "./card";
import Header from "./header";
import arrayOfCards from "../arrayFile";

class Board extends Component {
  state = {
    score: 0,
    wins: 0,
    gameLost: false,
  };

  //function we'll use to handle each time a user clicks a square
  handleSquareClicked = (event) => {
    //preventing auto page reload
    event.preventDefault();

    //grabbing the id of the image that's clicked

    var currentNodeID = event.target.id;
    console.log(currentNodeID);

    //checking if the player has lost

    arrayOfCards.forEach((element) => {
      if (element.id == currentNodeID) {
        //if the element has been clicked before
        if (element.hasBeenClicked == true) {
          alert("You lost");
          this.setState({ score: 0 }, function () {
            //resetting the array after a loss
            arrayOfCards.forEach((element) => {
              element.hasBeenClicked = false;
            });
            this.shuffle(arrayOfCards);
          });
          this.state.gameLost = true;
        } else {
          //if that image hasn't already been clicked, now mark it as has been clicked
          element.hasBeenClicked = true;
        }
      }
    });

    //if they haven't lost the game

    if (this.state.gameLost == false) {
      //add a point to their score
      this.setState({ score: this.state.score + 1 }, function () {
        //if they've clicked all twelve without losing, tell them they won and reset the cards
        if (this.state.score > 11) {
          alert("You won");
          this.setState({ score: 0, wins: this.state.wins + 1 }, function () {
            arrayOfCards.forEach((element) => {
              element.hasBeenClicked = false;
            });
          });
        }
      });
    } else {
      //if they have lost the game, skip all the steps above and just reset the deck
      this.state.gameLost = false;
      arrayOfCards.forEach((element) => {
        element.hasBeenClicked = false;
      });
    }

    this.shuffle(arrayOfCards);
  };

  //The function we'll use to shuffle the cards so that they're not in the same place every time

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there are still enough elements left to shuffle, we will move them around the screen
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div className="mainBoard">
        <Header score={this.state.score} wins={this.state.wins} />
        <div className="board">
          {arrayOfCards.map((card) => (
            <Card
              number={card.cardNumber}
              hasBeenClicked={card.hasBeenClicked}
              id={card.id}
              onClick={this.handleSquareClicked}
              link={card.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
