function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    const distanceInBlocks = pickupLocation - headquartersLocation;

    if (distanceInBlocks < 0) {
        return -distanceInBlocks;
    }
    
    return distanceInBlocks;
}

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }


function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      // Free sample case
      return 0;
    } else if (distanceInFeet <= 2000) {
      // Charging 2 cents per foot
      const feePerFoot = 0.02;
      return (distanceInFeet - 400) * feePerFoot;
    } else if (distanceInFeet <= 2500) {
      // Charging a flat rate of $25 for distances over 2000 feet
      return 25;
    } else {
      // Not allowing rides over 2500 feet
      return 'cannot travel that far';
    
    }
}