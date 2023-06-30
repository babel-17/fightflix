const mongoose = require('mongoose');
require('./category');

const fightSchema = require('./fightSchema');

module.exports = mongoose.model('Fight', fightSchema); 