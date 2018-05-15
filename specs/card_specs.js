const assert = require('assert');
const Card = require('../card.js')

describe('Card',function(){

  let card;

  beforeEach(function(){
    card = new Card("Superman",5,6,7);
  });

  it('has name',function(){
    const actual = card.name;
    assert.strictEqual(actual,'Superman')
  });

  it('has intelligence', function(){
    const actual = card.intelligence;
    assert.strictEqual(actual, 5);
  });

  it('has strength', function(){
    const actual = card.strength;
    assert.strictEqual(actual, 6);
  });

  it('has agility', function(){
    const actual = card.agility;
    assert.strictEqual(actual, 7);
  })

})

// EOF
