// Function to process a user click
const handleClick = (user) => {
    // Increment counter
    user.counter += 1;
  
    // Reward logic
    const rewardChance = Math.random(); // Generate a random number between 0 and 1
  
    if (rewardChance < 0.5) {
      user.points += 10; // 50% chance to earn 10 points
    }
    if (rewardChance < 0.25) {
      user.prizes += 1; // 25% chance to win a prize
    }
  
    return {
      counter: user.counter,
      points: user.points,
      prizes: user.prizes,
      rewardChance,
    };
  };
  
  module.exports = { handleClick };
  