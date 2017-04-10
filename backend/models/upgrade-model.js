var mongoose = require("mongoose");

var upgradeItemSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: String,
	price: Number,
	image: String
})

module.exports = mongoose.model("Upgrade", upgradeItemSchema);