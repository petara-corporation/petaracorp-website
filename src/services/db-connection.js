/* eslint-disable max-len */
/* eslint-disable vars-on-top */
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.MONGODB_CONN_STR || 'mongodb://localhost:27017/petaracorp';

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

let cached = global.mongoose;

if (!cached) {
  // eslint-disable-next-line no-multi-assign
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then(_mongoose => {
      return _mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
