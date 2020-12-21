import React from 'react'

export default function RecipeInfo(props) {
    console.log(props);
    return (
        <div className="row justify-content-center">
            <div className="card m-2" style={card}>
                <h1 className="col-12 mt-3">{props.recipe.title}</h1>
                <div className="row m-3">
                    <div className="col-5 mb-3"><img style={imageStyle} src={props.recipe.image} alt={props.recipe.title}/></div>
                    <div className="col-7 ">{props.recipe.instructions}</div>
                </div>
            </div>
        </div>
    )
}

const card = {
    borderRadius: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: '70%',
    backgroundColor: '#cccccc',
    borderColor: '#cccccc',
    marginTop: '3rem'
}

const imageStyle = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
}