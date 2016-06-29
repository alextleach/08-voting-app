import calculatePercent from 'voting/calculate-percent';
// import percentVotes from 'voting/percent-votes';
import totalVotes from 'voting/total-votes';

export default function percentVotes(options, index) {

let percent = calculatePercent(options[index].votes, totalVotes(options));

return percent;

}
