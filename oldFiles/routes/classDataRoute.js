const express = require("express");
const router = new express.Router();

router.get("/test", (req, res) => {
	res.send("test passed");
});

module.exports = router;