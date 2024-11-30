const mongoose = require('mongoose'); //Load mongoose
let schemaPost = mongoose.Schema({ //Define schema
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	title: {
		type: String,
		required: true,
		default: 'untitled'
	},
    content: {
        type: String,
        required: true,
        default: 'no-content'
    },
    tag:{
        type: String,
        required: true,
        default: 'no-tag'
    },
	authorEmail: {
		type: String,
		required: true,
		default: 'unknown'
	},
	date: {
		type: String,
		default: Date(),
        required: true,
	}
})
module.exports = mongoose.model('Post', schemaPost); //Export Post model