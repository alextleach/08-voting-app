export default function totalVotes(options) {
  let result = 0;

  for (let i = 0; i < options.length; i++) {
    result = result + options[i].votes;
   }
 return result;
}
