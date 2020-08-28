import React from 'react';
import RecipesList from './components/RecipesList'
import Header from './components/layout/Header'
import SearchBar from './components/SearchBar'
import Axios from 'axios';
import IngredientList from './components/IngredientList'

class App extends React.Component {

    state = {
      ingredients: [],
      recipes: []
    }

    addIngredients = ingredient => {
        this.setState({ingredients: [...this.state.ingredients, ingredient]});
        console.log(this.state.ingredients);
    }

    searchRecipe = () => {
        
        let ingredients = this.state.ingredients;
        let url_ingredients = ingredients.map((index) => `${index}`).join(',');
        console.log(url_ingredients);
        Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${url_ingredients}&apiKey=40fc2345992540f0be8fd7b73b307777`)
          .then(res => {
            // console.log(res.data);
            // this.setState({recipes: res.data})
            let recipes = res.data;
            this.getRecipeUrl(recipes);
          })
    }

    getRecipeUrl = recipes => {

        for(let recipe of recipes) {
            Axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=false&apiKey=40fc2345992540f0be8fd7b73b307777`)
              .then(res => {
                console.log('ulr',res.data.sourceUrl);
                console.log('recipe', recipe);
                const data = {
                  title:recipe.title,
                  image:recipe.image,
                  sourceUrl:res.data.sourceUrl,
                };
                this.setState({recipes: this.state.recipes.concat(data)})
              })
        }
    }
    
    




    render() {
        return (
            <div className="App container-fuild">
              <Header/>
              <SearchBar ingredients= {this.addIngredients} />
              <IngredientList list = {this.state.ingredients} searchRecipe = {this.searchRecipe} />
              <RecipesList className="row" recipes = {this.state.recipes} />
            </div>
        )
    }
}

export default App;
