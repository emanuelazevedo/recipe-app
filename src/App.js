import React from 'react';
import Recipes from './components/Recipes'
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
        
        const ingredients = this.state.ingredients;
        const url_ingredients = ingredients.map((index) => `${index}`).join(',');
        console.log(url_ingredients);
        Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${url_ingredients}&apiKey=40fc2345992540f0be8fd7b73b307777`)
          .then(res => this.setState({recipes: res.data}))
    }




    render() {
        return (
            <div className="App">
              <Header/>
              <SearchBar ingredients= {this.addIngredients} />
              <IngredientList list = {this.state.ingredients} searchRecipe = {this.searchRecipe} />
              <Recipes />
            </div>
        )
    }
}

export default App;
