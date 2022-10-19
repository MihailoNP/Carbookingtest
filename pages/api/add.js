import { connectToDatabase } from 'lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { data, collection } = req.body;

  const result = await db.collection(collection).insertOne(data);

  res.json(result);
}
