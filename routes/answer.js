const express = require("express");
const db = require("../db/MongoDB");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("got request");
  console.log(req.body);
  const success = await db.postAnswer(req.body.answer);
  res.status(success ? 200 : 500).json({ success: true });
});

module.exports = router;
