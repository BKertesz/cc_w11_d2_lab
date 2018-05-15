class Game{

  constructor(deck,players){
    this.deck = deck;
    this.players = players;
  }

  dealCards(){
    // For loop the amount of players
    for(var i = 0; i <this.players.length;i++){
      for(var j = 0; j <3;j++){
        // For loop for the amount of cards
        const card = this.deck.shift();
        this.players[i].getCard(card);
      }
    }
  }

  takeTurn(category){
    const player1Card = this.players[0].playCard();
    const player2Card = this.players[1].playCard();

    console.log(player1Card.agility)
    console.log(player1Card)
  }

}
module.exports = Game;
