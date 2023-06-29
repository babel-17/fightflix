const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fightSchema = new Schema({
    date: {
        type : String
    },
    title: {
        type : String
    },
    description: {
        type : String
    },
});

module.exports = mongoose.model('Fight', fightSchema);