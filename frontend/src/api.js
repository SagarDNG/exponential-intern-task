// src/api.js

const API_URL = 'http://localhost:5000';

export const clickButton = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/click`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });
    return response.json(); // Return updated user data
  } catch (error) {
    console.error('Error clicking the button:', error);
    return null;
  }
};
