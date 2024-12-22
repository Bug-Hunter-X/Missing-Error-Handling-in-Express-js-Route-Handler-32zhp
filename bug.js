const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to find the user with the given ID ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct: Returning 404
  }
  res.send(user); // Bug: Missing error handling if database query fails
});

// ... rest of the code ...