const { Steps } = require('../models');

const StepData = [
    {
        step_text: 'In a mixing bowl, combine the garlic, ginger, chili, honey, and soy sauce.',
        post_id: 1
    },
    {
        step_text: 'Mix in the chicken',
        post_id: 1
    },
    {
        step_text: 'Cover with cling film and leave to marinate in the fridge for 4-6 hours, or overnight',
        post_id: 1
    }
];

const seedStep = () => Steps.bulkCreate(StepData);

module.exports = seedStep;