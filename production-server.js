const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4001;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Edward Jones Insights Server is running' });
});

// Handle React Router - catch all other routes and return the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Edward Jones Insights Server running on http://0.0.0.0:${port}`);
  console.log(`📱 Health check available at http://0.0.0.0:${port}/health`);
  console.log(`🌐 Access your app at the public URL provided by the platform`);
});