import { MongoClient } from 'mongodb';

export default defineEventHandler(async (event) => {
    // Set up MongoDB connection details
    const uri = 'mongodb://localhost:27017';
    const dbName = 'interactive_resume';
    const collectionName = 'configs';

    try {
        // Connect to MongoDB
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // get the type of config from the URL path
        const url = getRequestURL(event)
        const type= url.pathname.split('/').pop();

        // Fetch the config from the database
        const records = await collection.find({ type }).toArray();

        // Return success response with config data
        return { success: true, data: records?.[0]?.config };
    } catch (err) {
        // output error to console and throw a 500 error
        console.error('Error in API:', err);
        throw createError({statusCode: 500, statusMessage: err.message || 'Internal Server Error' });
    }
})
