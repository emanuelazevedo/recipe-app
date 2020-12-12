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
        <li>{ingredient}</li>
    );

    return (
        <div>
            <ul>
                {list}
            </ul>
            <button onClick={props.searchRecipe} >Search Recipe</button>
        </div>
    )
}