const { Steps } = require('../models');

const dbStepsData = [
    {
        step: 'In a mixing bowl, combine the garlic, ginger, chili, honey, and soy sauce.',
        post_id: 1
    },
    {
        step: 'Mix in the chicken',
        post_id: 1
    },
    {
        step: 'Cover with cling film and leave to marinate in the fridge for 4-6 hours, or overnight',
        post_id: 1
    }
];

const seedSteps = () => Steps.bulkCreate(dbStepsData);

module.exports = seedSteps;