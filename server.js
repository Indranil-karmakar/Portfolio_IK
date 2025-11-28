import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { MongoClient } from 'mongodb';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
let db; // Declare db variable

app.use(express.json());

const mongo_url = process.env.MONGO_URL;
console.log("MONGO_URL:", process.env.MONGO_URL);

// Main API route

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = {
      name,
      email,
      message,
      createdAt: new Date()
    };
    await db.collection('contacts_portfolio').insertOne(contact);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});



const PORT = process.env.PORT || 3000;

// Connect to MongoDB and start server
MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    // If no database name in connection string, specify it here
    db = client.db(); // Replace 'portfolio' with your actual database name
    console.log("✅ Connected to existing MongoDB database");

    // Start server after successful MongoDB connection
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
      // Print all registered routes
      if (app._router) {
        app._router.stack.forEach((middleware) => {
          if (middleware.route) {
            const methods = Object.keys(middleware.route.methods)
              .map(m => m.toUpperCase())
              .join(', ');
            console.log(`[${methods}] ${middleware.route.path}`);
          }
        });
      }
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

  app.use(express.static(path.join(__dirname, 'dist')));

// Handle React Router - serve index.html for all non-API routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});




