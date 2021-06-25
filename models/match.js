var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var matchSchema = mongoose.Schema({
  city: String,
  date: String,
  teamA: String,
  teamB: String,
});
var Match = mongoose.model("matches", matchSchema);

function validateMatch(data) {
  const schema = Joi.object({
    city: Joi.string().min(3).max(100).required(),
    date: Joi.number().min(3).required(),
    teamA: Joi.string().min(3).required(),
    teamB: Joi.string().min(3).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Match = Match;
module.exports.validate = validateMatch;
