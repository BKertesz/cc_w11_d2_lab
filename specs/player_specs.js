const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function(){

  let player;
  let card;

  beforeEach(function(){
    player = new Player();
    card = new Card('Superman',5,6,7);
  })

  it('has empty hand', function(){
    const actual = player.hand.length;
    assert.strictEqual(actual, 0);
  })

  it('can get card',function(){
    player.getCard(card);
    const actual = player.hand.length
    assert.strictEqual(actual,1)
  })

  it('can drop a card',function(){
    player.getCard(card);
    player.dropCard(card);
    const actual = player.hand.length;
    assert.strictEqual(actual,0);
  })

})
