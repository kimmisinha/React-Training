const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const protectedRoute = require('./routes/protectedRoute');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api', protectedRoute); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
