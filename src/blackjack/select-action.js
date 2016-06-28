import cardValue from 'blackjack/card-value'
import cardSum from 'blackjack/card-sum'
import shouldHit from 'blackjack/should-hit'
import shouldSplit from 'blackjack/should-split'

export default function selectAction(cardA, cardB) {




if(cardValue(cardA) +cardValue(cardB) === 21){
  return 'stay';
}
if(shouldSplit(cardA,cardB) === true){
  return 'split';
}

if(shouldHit(cardA,cardB) !== false){
  return 'hit';
}

}
