import { MongoClient } from 'mongodb';

export default defineEventHandler(async (event) => {
    // Only allow GET and POST methods
    if (event.method !== 'GET' && event.method !== 'POST')
        throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' });

    // Set up MongoDB connection details
    const uri = 'mongodb://localhost:27017';
    const dbName = 'skills_db';
    const collectionName = 'skills';

    try {
        // Connect to MongoDB
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Handle GET and POST requests based on method
        if (event.method === 'GET') {
            // Fetch all skills from the database
            const skills = await collection.find({}).toArray();

            // Return success response with skills data
            return { success: true, data: skills };
        } else if (event.method === 'POST') {
            const body = await readBody(event);

            // Delete all existing skills and insert new ones from the request body
            await collection.deleteMany({});
            await collection.insertMany(body);

            // Return success response
            return { success: true };
        }
    } catch (err) {
        // output error to console and throw a 500 error
        console.error('Error in skills API:', err);
        throw createError({statusCode: 500, statusMessage: err.message || 'Internal Server Error' });
    }
})
