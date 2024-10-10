import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function startDB() {
  return mongoose.connect(process.env.MONGODB_URL);
}

let db;

try {
  if (process.env.MONGODB_URL) {
    db = await startDB();
  }
} catch (err) {
  console.log(err);
}

export default db;
