const router = require('express').Router();
const axios = require('axios').default;


const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes');
const IngredientsRoutes = require('./ingredients-routes');
const StepsRoutes = require('./steps-routes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/ingredients', IngredientsRoutes);
router.use('./step', StepsRoutes );


// router.get('/spoon/:search', (req, res) => {
//     var spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.API_KEY + 
//     "&query=" + search +
//     "&number=6&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true"
//     axios.get(spoonApiUrl).then(recipeResponse => {
//         console.log(recipeResponse);
//         res.json(recipeResponse)
//     }).catch(err => {
//         res.send(err);
//     })
// })

module.exports = router;