import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://AvielO:pass@cluster0.ne8zxr5.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
};
