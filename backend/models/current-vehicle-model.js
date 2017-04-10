var mongoose = require("mongoose");

var vehicleSchema = new mongoose.Schema({
	exterior: [{
		roofrack: {
			type: String,
			default: "stock"
		},
		frontBumper: {
			type: String,
			default: "stock"
		},
		backBumper: {
			type: String,
			default: "stock"
		},
		wheels: {
			type: String,
			default: "stock"
		},
		rims: {
			type: String,
			default: "stock"
		},
		shocks: {
			type: String,
			default: "stock"
		},
		ladder: {
			type: String,
			default: "none"
		},
		lightBar: {
			type: String,
			default: "none"
		},
		other: {
			type: String,
			default: "none"
		}

	}],
	interior[]
})