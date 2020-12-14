import React from 'react'

// export class IngredientList extends Component {
    
    
    
//     render() {
//         console.log(this.props.list);

//         return (
//             <div>
//                 <ul>
//                 {this.props.list.map((ingredient) => 
//                     <li>{ingredient}</li>
//                 )}
//                 </ul>
//                 <button onClick={this.props.searchRecipe} >Search Recipe</button>
//             </div>
//         )
//     }
// }

// export default IngredientList

export default function IngredientList(props) {
    console.log(props.list);
    const list = props.list.map(ingredient => 
        <li style={listElement} className="list-group-item list-group-item-success">
            {ingredient}
                <button style={listButton} className="btn btn-danger">X</button>
        </li>
    );

    return (
        <div className="">
            <div className="row">
                <ul className="list-group mt-3 col-md-4" style={listStyle}>
                        {list}
                </ul>
            </div>
            <span className="row">
                <button onClick={props.searchRecipe} className="btn btn-success col-md-2 mt-2" >Search Recipe</button>
            </span>
        </div>
    )
}

const listStyle = {
    listStyleType: "none",
}

const listButton = {
    position: 'absolute',
    right: '10px',
    top: '3px'
}

const listElement = {
    paddingTop: '10px',
    paddingBottom: '10px',
}