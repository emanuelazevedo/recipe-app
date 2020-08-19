import React, { Component } from 'react'

export class Recipe extends Component {
    
    render() {
        const {title, image} = this.props.recipe;
        console.log(this.props.recipe);

        return (
            <div>
                <div>{title}</div>
                <div><img src={image} alt={title} /></div>
            </div>
        )
    }
}

export default Recipe
