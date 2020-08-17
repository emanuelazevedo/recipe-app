import React from 'react';
import Recipe from './components/Recipe'
import Header from './components/layout/Header'
import SearchBar from './components/SearchBar'

class App extends React.Component {

    state = {
      ingredients: [],
      recipes: []
    }

    addIngredients = ingredient => {
        this.setState({ingredients: [...this.state.ingredients, ingredient]});
        console.log(this.state.ingredients);
    }

    


    render() {
        return (
            <div className="App">
              <Header/>
              <SearchBar ingredients= {this.addIngredients} />
              <Recipe />
            </div>
        )
    }
}

export default App;
