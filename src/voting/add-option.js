export default function addOption(existingPoll, optionName) {

  let newPoll = [];

    // Duplicate the old array
    //
    // Loop through all family members in the old array
    for (let i = 0; i < existingPoll.length; i++) {
      // Adds an item to
      newPoll.push(existingPoll[i]);
    }

    // Add the new member to the end of the newFamily array
    newPoll.push({ name: optionName, votes: 0 });

    return newPoll;
  };
