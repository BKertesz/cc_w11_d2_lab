class Player{
  constructor(){
    this.hand = [];
  }

  getCard(card){
    this.hand.push(card);
  }

  dropCard(card){
    const pos = this.hand.indexOf(card);
    const dropCard = this.hand.splice(pos,1);
    return dropCard;
  }

  playCard(){
    return this.hand.pop();
  }
}

module.exports = Player;
