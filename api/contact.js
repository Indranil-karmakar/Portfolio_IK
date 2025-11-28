import { MongoClient } from 'mongodb'

let clientPromise

async function getClient() {
  if (!clientPromise) {
    clientPromise = MongoClient.connect(process.env.MONGO_URI)
  }
  return clientPromise
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  try {
    const client = await getClient()
    const db = client.db()
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing fields' })
    }
    await db
      .collection('contacts_portfolio')
      .insertOne({ name, email, message, createdAt: new Date() })
    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message })
  }
}
