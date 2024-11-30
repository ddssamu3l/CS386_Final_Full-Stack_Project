const connectDB = require('../../modules/db.js');//Load mongoose module
const modelPost = require('../../models/createPostsSchema.js');//Load users model
connectDB(true, function() { //Create connection, passing callback function to execute
	modelPost.find() //Mongoose find method
		.then( function(posts) { //Callback then
			if(posts.length) {//Object already exists, length of array of objects
				modelPost.collection.drop() //Drop users collection
					.then( function(){ //Callback when drop operation is done
							console.log('Collection users dropped');//Notification
							connectDB(false); //Close only when drop operation is done
					});//Ending callback function curly brace, method drop parenthesis
			} else {
				console.log('Collection does not exist');
				connectDB(false); //Close connection
			}
		})
})




