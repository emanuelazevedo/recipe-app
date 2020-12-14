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
        if(ingredients !== '') {
        props.ingredients(ingredients);
        setIngredients([]);
        }
    }

    return (
        <div className="row">
            <form className="row justify-content-center" onSubmit={onSubmit} >
                    <input type="text" 
                        name="ingredients" 
                        placeholder="Add ingredients" 
                        className="col-md-6 col-md-offset-2"
                        value={ingredients} onChange={onChange} 
                    />
                    <input type="submit" value="Add Ingredient" className="btn btn-primary col-md-2" style={marginInput} />
                
            </form>            
        </div>
    )
}

const marginInput = {
    marginLeft: '0.5rem'
}