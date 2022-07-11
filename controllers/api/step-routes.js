const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Steps } = require('../../models');






router.get('/', (req, res) => {
  Steps.findAll(
  {  Attributes:['id','step_text','post_id'] }
  )
    .then(StepData => res.json(StepData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



  router.post('/', (req, res) => {
   Steps.create({
     step_id: req.body.step_id,
     step_text: req.body.step_text,
      post_id: req.body.post_id
    })
      .then(StepData => res.json(StepData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });







module.exports = router;