const Fight = require('../../models/fight');

module.exports = {
    create, index, show
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