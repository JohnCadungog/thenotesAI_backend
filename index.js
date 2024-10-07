 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

 MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser true, useUnifiedTopology true })
  .then(() = console.log('MongoDB connected'))
  .catch((err) = console.log(err));

 Sample route
app.get('', (req, res) = {
  res.send('AI-powered Notes App Backend');
});

const PORT = process.env.PORT  5000;
app.listen(PORT, () = {
  console.log(`Server running on port ${PORT}`);
});
