import React from 'react';
import Recipe from './components/Recipe'
import Header from './components/layout/Header'
import SearchBar from './components/SearchBar'
import Axios from 'axios';

class App extends React.Component {

    state = {
      ingredients: [],
      recipes: []
    }

    addIngredients = ingredient => {
        this.setState({ingredients: [...this.state.ingredients, ingredient]});
        console.log(this.state.ingredients);
    }

    searchRecipe = event => {
        event.preventDefault();
        
        const ingredients = {
          ingredients: this.state.ingredients
        }
        console.log(ingredients);
        Axios.post(`https://api.spoonacular.com/recipes/findByIngredients/information?ingredients=apples,+flour,+sugar&number=2&apiKey=40fc2345992540f0be8fd7b73b307777`)
          .then(res => console.log(res))
    }




    render() {
        return (
            <div className="App">
              <Header/>
              <SearchBar ingredients= {this.addIngredients} />
              <form onSubmit={this.searchRecipe}>
                    <input type="submit" value="Search Recipe"/>
                </form>
              <Recipe />
            </div>
        )
    }
}

export default App;
