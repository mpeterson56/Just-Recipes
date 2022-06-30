// const e = require("express");
// const { response } = require("express");

var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById("search-input");

var recipeTitles = [];
var recipeIngredients = [];
var recipeSteps = [];

searchBtn.addEventListener('click', (e) => {
    console.log('search worked');
    e.preventDefault();
    getApiData();
});

function getApiData() {
    // var spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + process.env.API_KEY + 
    // "&query=" + searchText.value +
    // "&number=6&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true"

    fetch(`/api/spoon/${searchText.value}`)
        .then((data) => data.json())
        console.log('info aquired')
        .then((json) => {
            for (let i = 0; i < json.results.length; i++) {
                // pulling each extendedIngredient[j] at each result[i] and grabbing the original which shows the measure and ingredient type
                for (let j = 0; j < json.results.extendedIngredients.length; j++) {
                    recipeIngredients.push(json.results[i].extendedIngredients[j].original);
                    var ingredientList = document.createElement('ul' + i);
                    ingredientList.textContent = recipeIngredients[j];
                }

                // pulling each steps[p] at each result[i] and grabbing the step which shows the steps to cook the recipe in order
                for (let p = 0; p < json.results.analyzedInstructions.steps.length; p++) {
                    recipeSteps.push(json.results[i].analyzedInstructions.steps[p].step);
                    var cookingSteps = document.createElement('ol' + i);
                    cookingSteps.textContent = recipeSteps[p];
                }

                // pushes recipe titles to an array and fills a correlated text area with the title at each index
                recipeTitles.push(json.results[i].title);
                var title = document.createElement('h2' + i);
                title.textContent = recipeTitles[i];
                // gets the image, gets the element in which it will be placed, and adds it as an attribute
                var recipeImage = json.results[i].image;
                var image = document.createElement('img' + i);
                image.setAttribute("src", recipeImage);
            }
        })
        //  fetch(spoonApiUrl).then( function(json) {
        //     if(json.ok) {
        //         document.location.replace('../api/post/')
        //     } else {
        //         alert(response.statusText)
        //     }
        //  })
};

