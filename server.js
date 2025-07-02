
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
// import path from 'path';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Main API route
app.get('/', (req, res) => {
  res.send('API is running');
});

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
    await db.collection('contacts').insertOne(contact);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



const mongo_url = process.env.MONGO_URL;
let db;
const PORT = 5000;

console.log("MONGO_URL:", process.env.MONGO_URL);

// Connect to MongoDB and start server
MongoClient.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db('airbnb');
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);

      // ...inside app.listen callback...
if (app._router) {
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // Print all methods for the route
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

  });