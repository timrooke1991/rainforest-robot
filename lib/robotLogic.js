const compareArrays = require('./compareArrays');

function robotLogic(conveyorBeltLocation, robotStartLocation, crateDetails, route) {
  // Set initial values
  const robotLocation = robotStartLocation;
  let bags = 0;
  let droppedBags = null;
  let robotStatus = 'OK';
  const arrayOfSteps = route.split('');

  const instructions = {
    N: () => robotLocation[1] += 1,
    S: () => robotLocation[1] -= 1,
    E: () => robotLocation[0] += 1,
    W: () => robotLocation[0] -= 1,
    P: () => {
      // if crate location is found return the index
      const index = compareArrays(crateDetails, robotLocation);
      // if not found set status to BROKEN and exit the function
      if (index === -1) {
        robotStatus = 'BROKEN';
        return false;
      }

      if (crateDetails[index][2] > 0) {
        crateDetails[index][2] -= 1;
        bags += 1;
      }
    },
    D: () => {
      // Check the robot's location matches the conveyorBeltLocation
      if (robotLocation[0] === conveyorBeltLocation[0] &&
          robotLocation[1] === conveyorBeltLocation[1]) {
        droppedBags = bags;
        return droppedBags;
      } else {
        robotStatus = 'BROKEN';
      }
    }
  };
  
  // Run through steps (e.g. 'W', 'E', 'P') and call the relevant instructions
  arrayOfSteps.forEach((step) => {
    if (robotStatus === 'OK') instructions[step]();
  });

  // Build status object to send back
  const status = {
    bagsDropped: droppedBags ? droppedBags : 0,
    robotStatus: `${robotLocation[0]} ${robotLocation[1]} ${robotStatus}`
  };

  return status;
}

module.exports = { robotLogic };
