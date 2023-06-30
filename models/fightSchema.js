const Schema = require('mongoose').Schema;

const fightSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: {type: Date, required: true},
}, {
  timestamps: true
});

module.exports = fightSchema;