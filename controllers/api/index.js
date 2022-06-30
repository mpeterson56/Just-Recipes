const router = require('express').Router();
const axios = require('axios').default;

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// router.get('/spoon/:search', (req, res) => {
//     // const search = document.querySelector('#search-input');
//     var spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.API_KEY + 
//     "&query=" + search +
//     "&number=6&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true"
//     axios.get(spoonApiUrl).then(recipeResponse => {
//         res.json(recipeResponse)
//     }).catch(err => {
//         res.send(err);
//     })
// })


module.exports = router;