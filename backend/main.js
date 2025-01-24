// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const { handleClick } = require('./jobs/handleClick');
const User = require('./models/userModel');
const cors = require('cors');



const app = express();
app.use(express.json());

// Add this line below your express setup
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL if deployed
  }));
  

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/clickerGame', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Clicker Game API');
});

// API endpoint to handle clicks
app.post('/click', async (req, res) => {
  const { userId } = req.body; // Assume userId is sent with each request

  // Fetch user from the database
  let user = await User.findById(userId);
  if (!user) {
    user = new User({ _id: userId, counter: 0, points: 0, prizes: 0 });
  }

  // Process the click
  const result = handleClick(user);

  // Update the user in the database
  await user.save();

  //   console.log(result);
  res.json(result); // Send updated stats back to the frontend
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
