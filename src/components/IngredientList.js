import React, { Component } from 'react'

export class IngredientList extends Component {
    
    
    
    render() {
        console.log(this.props.list);

        return (
            <div>
                <ul>
                {this.props.list.map((ingredient) => 
                    <li>{ingredient}</li>
                )}
                </ul>
                <button onClick={this.props.searchRecipe} >Search Recipe</button>
            </div>
        )
    }
}

export default IngredientList
