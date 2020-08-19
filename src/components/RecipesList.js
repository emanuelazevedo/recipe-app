import React, { Component } from 'react'
import Recipe from './Recipe'

export class RecipesList extends Component {

    render() {
        // return this.props.recipes.map( recipe => (
        //     <Recipe key={recipe.id} recipe={recipe} />
        // ));
        return(
            <div className="row">
                {this.props.recipes.map( recipe => 
                    <Recipe key={recipe.id} recipe={recipe} />
                )}
            </div>
        );
    }
}

export default RecipesList
