import cardValue from 'blackjack/card-value'
import cardSum from 'blackjack/card-sum'
import shouldHit from 'blackjack/should-hit'
import shouldSplit from 'blackjack/card-value'
export default function selectAction(cardA, cardB) {

var y = cardValue(cardA);
var z = cardValue(cardB);
var x = cardValue(cardA) + cardValue(cardB);


if(cardSum(y,z) === 21){
  return 'stay';
}
if(shouldHit(y,z) === true){
  return 'hit';
}
if(shouldSplit(y,z) === true){
  return 'split';
}
}
