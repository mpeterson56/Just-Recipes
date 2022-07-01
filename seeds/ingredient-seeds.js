const { Ingredients } = require('../models');

const ingredientData = [
    {
        ingredient: 'peppers',
        measurement: '1',
        post_id: '1'
    },
    {
        ingredient: 'onion',
        measurement: '2 cups',
        post_id: '1'
    },
    {
        ingredient: 'chicken',
        measurement: '16 oz',
        post_id: '1'
    },
    {
        ingredient: 'tomato sauce',
        measurement: '8 ounce can',
        post_id: '1'
    }
]

const seedIngredients = () => Ingredients.bulkCreate(ingredientData);

module.exports = seedIngredients;