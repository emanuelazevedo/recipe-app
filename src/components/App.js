import React, { useState } from 'react';
import RecipesList from './RecipesList'
import RecipeInfo from './RecipeInfo'
import Header from './layout/Header'
import SearchBar from './SearchBar'
import Axios from 'axios';
import IngredientList from './IngredientList'

let ingredientId = 0;

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const [recipeData, setRecipeData] = useState({});
  const [recipePage, setRecipePage] = useState(false);

  function addIngredients(ingredient) {
    ingredientId++;
    setIngredients(ingredients => [...ingredients, {ingredient, ingredientId}]);
  }

  function searchRecipe() {
    let url_ingredients = ingredients.map((index) => `${index.ingredient}`).join(',');
    console.log(url_ingredients);
    Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${url_ingredients}&apiKey=0223a4514ad04e749eb86a5d4adf474a `)
      .then(res => {
        console.log('recipes set', res.data);
        
        setRecipes(res.data)
        setRecipePage(false);
      })
  }

  function removeIngredient(index) {
    // let ingredientClone = [...ingredients];
    // ingredientClone.splice(index, 1);
    // console.log('i', index);
    // console.log('in', ingredientClone);
    // setIngredients(ingredientClone);
    setIngredients(ingredients.filter(ingredient => ingredient.ingredientId !== index));
  }

  function getRecipe(recipeId) {
    Axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=0223a4514ad04e749eb86a5d4adf474a`)
      .then(res => {
        setRecipeData(res.data);
        setRecipePage(true);
      })
  }
  
  return (
    <div>
      <Header/>
      <div className="container">
        
        <SearchBar ingredients= {addIngredients} />
        <IngredientList list = {ingredients} removeIngredient = {removeIngredient} searchRecipe = {searchRecipe} />
        
        {
          !recipePage && 
          (<RecipesList recipes = {recipes} getRecipe = {getRecipe} />)
        }
        
        {recipePage && (<RecipeInfo recipe = {recipeData} />)}
      </div>
    </div>
  )
  

}
// class App extends React.Component {

//     state = {
//       ingredients: [],
//       recipes: []
//     }

//     addIngredients = ingredient => {
//         this.setState({ingredients: [...this.state.ingredients, ingredient]});
//         console.log(this.state.ingredients);
//     }

//     searchRecipe = () => {
        
//         let ingredients = this.state.ingredients;
//         let url_ingredients = ingredients.map((index) => `${index}`).join(',');
//         console.log(url_ingredients);
//         Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${url_ingredients}&apiKey=40fc2345992540f0be8fd7b73b307777`)
//           .then(res => {
//             // console.log(res.data);
//             // this.setState({recipes: res.data})
//             let recipes = res.data;
//             this.getRecipeUrl(recipes);
//           })
//     }

//     getRecipeUrl = recipes => {

//         for(let recipe of recipes) {
//             Axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=false&apiKey=40fc2345992540f0be8fd7b73b307777`)
//               .then(res => {
//                 console.log('ulr',res.data.sourceUrl);
//                 console.log('recipe', recipe);
//                 const data = {
//                   title:recipe.title,
//                   image:recipe.image,
//                   sourceUrl:res.data.sourceUrl,
//                 };
//                 this.setState({recipes: this.state.recipes.concat(data)})
//               })
//         }
//     }
    
    




//     render() {
//         return (
//             <div className="App container-fuild">
//               <Header/>
//               <SearchBar ingredients= {this.addIngredients} />
//               <IngredientList list = {this.state.ingredients} searchRecipe = {this.searchRecipe} />
//               <RecipesList className="row" recipes = {this.state.recipes} />
//             </div>
//         )
//     }
// }

// export default App;

