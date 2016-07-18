import cardValue from 'blackjack/card-value'
export default function shouldHit(cardA, cardB) {

if (cardValue(cardA) + cardValue(cardB) < 17){
  return true;
}
if (cardValue(cardA) === cardValue(cardB)){
  return false;
}
if (cardValue(cardA) + cardValue(cardB) === 21){
  return false;
}

return false;
}
