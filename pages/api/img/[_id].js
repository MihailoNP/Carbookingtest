import { connectToDatabase } from 'lib/mongodb';
import { ObjectID } from 'bson';
import Grid from 'gridfs-stream';

const mongo = require('mongodb');

module.exports = async (req, res) => {
  const { db, gridfsBucket } = await connectToDatabase();
  const {
    query: { _id },
    method,
  } = req;

  console.log('gridfsBucket', gridfsBucket);

  switch (method) {
    case 'GET':
      try {
        const file = await db
          .collection('uploads.files')
          .findOne({ _id: new ObjectID(_id) });

        if (!file || file.length === 0) {
          return res.status(404).json({ err: 'Could not find file' });
        } else if (
          file.contentType === 'image/jpeg' ||
          file.contentType === 'image/jpg' ||
          file.contentType === 'image/png'
        ) {
          const readstream = gridfsBucket.openDownloadStream(file._id);
          readstream.pipe(res);
        } else {
          res.status(404).json({ err: 'Not an image' });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ itemnotfound: 'No image found' });
      }
      break;
    default:
      res.status(400).json({ itemnotfound: 'No image1' });
      break;
  }
};
