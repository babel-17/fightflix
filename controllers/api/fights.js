const Fight = require('../../models/fight');

module.exports = {
    create, index, show, update
};

async function create(req, res) {
    try {
        console.log(req.body.fightData);
        await Fight.create(req.body.fightData);
        res.json({data: 'Fight created'});
    } catch (err) {
        res.json({err});
    }    
};

async function index(req, res) {
    const fights = await Fight.find({});
    console.log(fights);
    res.json(fights);
};

async function show(req, res) {
    const fight = await Fight.findById(req.params.id);
    res.json(fight);
};

async function update(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    const fight = await Fight.findByIdAndUpdate(req.params.id, req.body.fightData, {new: true});
    res.json(fight);
};