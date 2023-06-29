const Fight = require('../../models/fight');

module.exports = {
    create, 
};

async function create(req, res) {
    try {
        console.log(req.body);
        await Fight.create(req.body);
        res.json({data: 'Fight created'});
    } catch (err) {
        res.json({err});
    }
};