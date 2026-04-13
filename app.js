const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date(),
    message: 'CI/CD Pipeline is working!'
  });
});

// API endpoint
app.get('/api/info', (req, res) => {
  res.status(200).json({
    app: 'CICD Learning App',
    version: '1.0.0',
    author: 'Ayan',
    feature: 'Automated CI/CD Pipeline'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const server = app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});

module.exports = { app, server };
