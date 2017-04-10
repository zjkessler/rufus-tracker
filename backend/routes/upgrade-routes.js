var express = require("express");
var upgradeRouter = express.Router();
var Upgrade = require("../models/upgrade-model");

upgradeRouter.get("/", function (req, res) {
	'use strict';
	Upgrade.find(function (err, upgrade) {
		if (err) res.status(500).send(err);
		else res.send(upgrade);
	})
})

upgradeRouter.post("/", function (req, res) {
	var upgrade = new Upgrade(req.body);
	upgrade.save(function (err, newUpgrade) {
		if (err) res.status(500).send(err);
		else res.send(newUpgrade);
	});
});

upgradeRouter.put("/:upgradeId", function (req, res) {
	Upgrade.findByIdAndUpdate(req.params.upgradeId, req.body, {
		new: true
	}, function (err, updatedUpgrade) {
		if (err) res.status(500).send(err);
		else res.send(updatedUpgrade)
	})
});

upgradeRouter.delete("/:upgradeId", function (req, res) {
	Upgrade.findByIdAndRemove(req.params.upgradeId, function (err, earasedUpgrade) {
		if (err) res.status(500).send(err);
		else res.send(earasedUpgrade);
	})
})

module.exports = upgradeRouter;
