export default function addOption(existingPoll, optionName) {

  let newPoll = [];
  for (let i = 0; i < existingPoll.length; i++) {
    newPoll.push(existingPoll[i]);
  }
  newPoll.push({
    name: optionName,
    votes: 0
  });
  return newPoll;
};
