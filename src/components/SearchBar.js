import React, { useState } from 'react'

// export class SearchBar extends Component {
//     state = {
//         ingredients: '',
//     }

    
//     onChange = e => this.setState({ingredients: e.target.value});

//     onSubmit = e => {
//         e.preventDefault();
//         this.props.ingredients(this.state.ingredients);
//         this.setState({ingredients: [] });
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
//                     <input type="text" 
//                         name="ingredients" 
//                         placeholder="Add ingredients" 
//                         style={{flex: '10', padding: '5px'}} 
//                         value={this.state.ingredients} onChange={this.onChange} />
//                         <input type="submit" value="Add Ingredient" className="btn" style={{flex: '1'}} />
//                 </form>            
//             </div>
//         )
//     }
// }

// export default SearchBar
export default function SearchBar(props) {
    const [ingredients, setIngredients] = useState('');

    function onChange(e) {
        setIngredients(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        props.ingredients(ingredients);
        setIngredients([]);
    }

    return (
        <div>
            <form onSubmit={onSubmit} style={{display: 'flex'}}>
                <input type="text" 
                    name="ingredients" 
                    placeholder="Add ingredients" 
                    style={{flex: '10', padding: '5px'}} 
                    value={ingredients} onChange={onChange} />
                    <input type="submit" value="Add Ingredient" className="btn" style={{flex: '1'}} />
            </form>            
        </div>
    )
}