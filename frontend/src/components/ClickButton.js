// src/components/ClickButton.js

import React, { useState } from 'react';
import { clickButton } from '../api';

const ClickButton = ({ userId }) => {
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [rewardChance, setRewardChance] = useState(0);
  const [message, setMessage] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleClick = async () => {
    const result = await clickButton(userId);
    setToggle(true);

    if (result) {
      setCounter(result.counter);
      setPoints(result.points);
      setPrizes(result.prizes);
      setRewardChance(result.rewardChance);

      // Show a reward message if a prize or points are earned
      if (result.points > points) {
        if (result.prizes > prizes) {
            setMessage('🎉 You earned 10 points! and 🏆 You won a prize!');
        } else {
            setMessage('🎉 You earned 10 points!');
        }

      } else if (result.prizes > prizes) {
        setMessage('🏆 You won a prize!');
      } else {
        setMessage('👍 Keep clicking!');
      }
    } else {
      setMessage('❌ Error occurred in Backend!');
    }
  };

  return (
    <div className='appp' style={{ textAlign: 'center', marginTop: '150px' }}>
      <h1>Clicker Game</h1>
      <p>Total Clicks: {counter}</p>
      <p>Points Earned: {points}</p>
      <p>Prizes Won: {prizes}</p>
      <button
        onClick={handleClick}
        style={{
          fontSize: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Click Me
      </button>
      <p style={{ marginTop: '20px', color: '#555' }}>{message}</p>
      {toggle &&  <p style={{ marginTop: '20px', color: '#555' }}>{`The Reward Chance this time was ${rewardChance.toFixed(2)}`}</p>}
    </div>
  );
};

export default ClickButton;
