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
     Steps_id: req.body.Steps_id,
     step: req.body.step,
      post_id: req.body.post_id
    })
      .then(dbStepsData => res.json(dbStepsData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });







module.exports = router;