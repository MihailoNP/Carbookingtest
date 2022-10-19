import { ObjectID } from 'bson';
import { connectToDatabase } from 'lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  let { collection, filter, project } = req.body;

  if (filter && filter._id) {
    filter._id = new ObjectID(filter._id);
  }

  const result = await db
    .collection(collection)
    .find({ ...filter })
    .project({ ...project })
    .sort({ createdOn: -1 })
    .toArray();

  res.json(result);
}
