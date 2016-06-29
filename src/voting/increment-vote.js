import totalVotes from 'voting/total-votes';

export default function incrementVote(existingPoll, optionIndex) {
  const collector = [];
  let newObject = {};

  for (let i = 0; i < existingPoll.length; i++) {

    newObject = {name: `${existingPoll[i].name}`, votes: existingPoll[i].votes};
    collector.push(newObject);

  }

  collector[optionIndex].votes++;
  return collector;
}
