const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');
const Game = require('../game.js');

describe('Game', function(){

  let player1;
  let player2;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let cardArray;
  let game;

  beforeEach(function(){
    player1 = new Player();
    player2 = new Player();
    player3 = new Player();
    playerArray = [player1,player2];

    card1 = new Card('Superman',6,9,7);
    card2 = new Card('Scarlet Witch',7,10,5);
    card3 = new Card('Black Window',8,6,9);
    card4 = new Card('The Flash',7,4,10);
    card5 = new Card('Wonder Woman',8,7,5);
    card6 = new Card('Batman',10,5,6);
    cardArray = [card1,card2,card3,card4,card5,card6]

    game = new Game(cardArray,playerArray);
  })

  it('has a deck',function(){
    const actual = game.deck.length;
    assert.deepStrictEqual(actual,6);
  })

  it('can deal cards',function(){

    game.dealCards();
    const actual = player1.hand.length;
    const actual2 = player2.hand.length;
    assert.deepStrictEqual(actual,3)
    assert.deepStrictEqual(actual2,3);
  })

  it('can take turn', function(){
    game.dealCards();
    game.takeTurn("agility");
    const actual = player1.hand.length; //2
    const actual2 = player2.hand.length; //4

    assert.deepStrictEqual(actual,4)
    assert.deepStrictEqual(actual2,2);

  })
})




// EOF
