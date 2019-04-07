const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Database
require('./database/database');

// Routers
const userRouter = require('./routes/users');
const threadRouter = require('./routes/threads');
const postsRouter = require('./routes/posts');

// Enable cors
app.use(cors());

// Serve static files from React
app.use(express.static(path.join(__dirname, 'client/build')));

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
app.use('/api/user', userRouter);
app.use('/api/forum', threadRouter);
app.use('/api/forum/posts', postsRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server on PORT: ${PORT}`));