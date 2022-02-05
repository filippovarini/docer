const express = require("express");
const db = require("../db/MongoDB");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("got request");
  console.log(req.body);
  await db.postAnswer(req.body.answer);
  res.json({ success: true });
});

module.exports = router;
