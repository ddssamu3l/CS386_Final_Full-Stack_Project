const connectDB = require('../../modules/db.js'); // Load mongoose module
const modelPost = require('../../models/createPostsSchema.js'); // Load posts model
const posts = require('../../modules/posts.js'); // Load posts data

// Creating data in database
connectDB(true, function(err) {
    if (err) {
        console.error('Failed to connect to the database:', err);
        return;
    }

    modelPost.init()
        .then(function() {
            console.log("Posts table created");
            return modelPost.insertMany(posts);
        })
        .then(function() {
            console.log("Sample posts inserted successfully");
        })
        .catch(function(error) {
            console.error('Error during database operations:', error);
        })
        .finally(function() {
            // Disconnect from the database after all operations are complete
            connectDB(false, function(err) {
                if (err) {
                    console.error('Error disconnecting from the database:', err);
                } else {
                    console.log('Disconnected from the database');
                }
            });
        });
});