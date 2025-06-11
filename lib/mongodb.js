import { MongoClient } from "mongodb";

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

if (process.env.NODE_ENV === "development") {
    // For development, use a global variable to preserve the client across module reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // For production, directly create the client
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
