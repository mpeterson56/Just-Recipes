const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Ingredients} = require('../../models');



router.get('/', (req, res) => {
    Ingredients.findAll()
      .then(dbIngredientsData => res.json(dbIngredientsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    Ingredients.create({
      Ingredient: req.body.Ingredient,
      measurement: req.body.measurement,
      post_id: req.body.post_id
    })
      .then(dbIngredientsData => res.json(dbIngredientsData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });










module.exports = router;