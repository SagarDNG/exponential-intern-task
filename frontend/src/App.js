// src/App.js

import React from 'react';
import ClickButton from './components/ClickButton';

const App = () => {
  const userId = 'testUser123'; // Replace with a dynamic user ID in a real app

  return (
    <div>
      <ClickButton userId={userId} />
    </div>
  );
};

export default App;
