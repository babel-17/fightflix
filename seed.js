require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Fight = require('./models/fight');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'MMA', sortOrder: 10},
    {name: 'Boxing', sortOrder: 20},
    {name: 'Kickboxing', sortOrder: 30},
    {name: 'Muay Thai', sortOrder: 40},
    {name: 'Wrestling', sortOrder: 50},
    {name: 'Jiu Jitsu', sortOrder: 60},
    {name: 'Traditional', sortOrder: 70},
  ]);

  await Fight.deleteMany({});
  const fights = await Fight.create([
    {name: 'Cage Control', emoji: '👊🏿', category: categories[0]},
    {name: 'Rhythm Step', emoji: '🥊', category: categories[1]},
    {name: 'Roundhouse', emoji: '🦶🏽', category: categories[2]},
    {name: 'Leg Kick', emoji: '🦵🏾', category: categories[3]},
    {name: 'Take-Downs', emoji: '🤼‍♂️', category: categories[4]},
    {name: 'Submission', emoji: '🙅🏾‍♀️', category: categories[5]},
    {name: 'Kumite', emoji: '🥋', category: categories[6]},
  ]);

  console.log(comments)

  process.exit();
})();