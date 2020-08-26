import React, { Component } from 'react'

export class Recipe extends Component {
    
    render() {
        const {title, image, sourceUrl} = this.props.recipe;
        // console.log(this.props.recipe);

        return (
            <div className="col-md-3" style={card}>
                <a href={sourceUrl}>
                    <h4>{title}</h4>
                    <div><img style={imageStyle} src={image} alt={title} /></div>
                </a>
            </div>
        )
    }
}

const card = {
    borderRadius: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
}

const imageStyle = {
    width: '220px',
    height: '190px',
    marginLeft: 'auto',
    marginRight: 'auto'
}


export default Recipe
