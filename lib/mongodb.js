import mongoose from 'mongoose'
// mongoose.set('bufferCommands', false);
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}
// global.mongoose.set('bufferCommands', false);
async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      //  await mongoose.set('bufferCommands', false)
      // useMongoClient: true,
      bufferCommands: false,
      // bufferMaxEntries: 0,
    }

    cached.promise = await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    })
  }
  cached.conn = await cached.promise
  return cached.conn;
}

export default dbConnect




// import { MongoClient } from 'mongodb';

// const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_DB = process.env.MONGODB_DB;

// // check the MongoDB URI
// if (!MONGODB_URI) {
//     throw new Error('Define the MONGODB_URI environmental variable');
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//     throw new Error('Define the MONGODB_DB environmental variable');
// }

// let cachedClient = null;
// let cachedDb = null;

//  async function dbConnect() {
//     // check the cached.
//     if (cachedClient && cachedDb) {
//         // load from cache
//         return {
//             client: cachedClient,
//             db: cachedDb,
//         };
//     }

//     // set the connection options
//     const opts = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     };

//     // Connect to cluster
//     let client = new MongoClient(MONGODB_URI, opts);
//     await client.connect();
//     let db = client.db(MONGODB_DB);

//     // set cache
//     cachedClient = client;
//     cachedDb = db;

//     return {
//         client: cachedClient,
//         db: cachedDb,
//     };
// }

// export default dbConnect;