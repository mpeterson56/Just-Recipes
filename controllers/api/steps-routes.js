const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Steps } = require('../../models');





router.get('/', (req, res) => {
   Steps.findAll()
      .then(dbStepsData => res.json(dbStepsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



  router.post('/', (req, res) => {
   Steps.create({
     Steps: req.body.Steps,
     ingredients_id: req.body.ingredients_id,
      post_id: req.body.post_id
    })
      .then(dbStepsData => res.json(dbStepsData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });







module.exports = router;