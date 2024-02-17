const connection = require('../config/connection');
const User = require('../models/user');
const Thought = require('../models/thought'); // Import the Thought model
// Remove the import for Application if it's not needed
// const Application = require('../models/Application');
const { thoughtData, userData } = require('./data');

connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

connection.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        // Drop collections if they exist
        const thoughtCheck = await Thought.exists();
        if (thoughtCheck) {
            await Thought.collection.drop();
            console.log('Dropped "thoughts" collection');
        }

        const userCheck = await User.exists();
        if (userCheck) {
            await User.collection.drop();
            console.log('Dropped "users" collection');
        }

        // Insert predefined user data into the database
        await User.insertMany(userData);
        console.log('Inserted predefined user data');

        // Insert predefined thought data into the database
        await Thought.insertMany(thoughtData);
        console.log('Inserted predefined thought data');

        // Print out seeded data
        console.table(userData);
        console.table(thoughtData);
        console.info('Seeding complete! 🌱');
    } catch (error) {
        console.error('Seeding error:', error);
    } finally {
        // Close MongoDB connection
        connection.close();
        console.log('Disconnected from MongoDB');
    }
});




