const express = require("express");
let router = express.Router();
const validateMatch = require("../../middlewares/validateMatch");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Match } = require("../../models/match");

//get match
router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let matchs = await Match.find().skip(skipRecords).limit(perPage);
  let total = await Match.countDocuments();
  return res.send({ total, matchs });
});

//get single match
router.get("/:id", async (req, res) => {
  try {
    let match = await Match.findById(req.params.id);
    if (!match)
      return res.status(400).send("Match With given ID is not present"); //when id is not present id db
    return res.send(match); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});

//update a match
router.put("/:id", validateMatch, auth, admin, async (req, res) => {
  let match = await Match.findById(req.params.id);
  match.city = req.body.city;
  match.date = req.body.date;
  match.teamA = req.body.teamA;
  match.teamB = req.body.teamB;
  await match.save();
  return res.send(match);
});

//delete a match
router.delete("/:id", auth, admin, async (req, res) => {
  let match = await Match.findByIdAndDelete(req.params.id);
  return res.send(match);
});

// Insert new match
router.post("/", validateMatch, auth, async (req, res) => {
  let match = new Match();
  match.city = req.body.city;
  match.date = req.body.date;
  match.teamA = req.body.teamA;
  match.teamB = req.body.teamB;
  await match.save();
  return res.send(match);
});

module.exports = router;
