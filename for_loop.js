var cards = ['diamond', 'spade', 'hearts', 'clubs'];
var someCards = ['diamond'];


for (i=0; i <= cards.length; i++) {
  for (j=0; j < someCards.length; j++) {
    if (cards[i] == someCards[j]) {
      console.log(cards[i]);
    }
  }
}
