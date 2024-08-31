const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = 'mongodb://localhost:27017/todoapp'; // Change if using a remote DB

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 