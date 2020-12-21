import React from 'react';

// export class Recipe extends Component {
    
//     render() {
//         const {title, image, sourceUrl} = this.props.recipe;
//         // console.log(this.props.recipe);

//         return (
//             <div className="col-md-3" style={card}>
//                 <a href={sourceUrl}>
//                     <h4>{title}</h4>
//                     <div><img style={imageStyle} src={image} alt={title} /></div>
//                 </a>
//             </div>
//         )
//     }
// }

const card = {
    borderRadius: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: '30%',
    backgroundColor: '#cccccc',
    borderColor: '#cccccc'
}

const imageStyle = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
}


export default function Recipe(props) {
    const {title, image, id} = props.recipe;

    // const [sourceUrl, setSourceUrl] = useState('');
    // useEffect(() => {
        
    //     Axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=0223a4514ad04e749eb86a5d4adf474a`)
    //         .then(res => {
    //             console.log('hello', res.data);
    //             setSourceUrl(res.data.sourceUrl);
    //         })
        
    // }, [])

    // `https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=false&apiKey=0223a4514ad04e749eb86a5d4adf474a `
    return (
        <div className="col-md-4 m-3" style={card} onClick={ () => props.getRecipe(id)}>
            <h4>{title}</h4>
            <div><img style={imageStyle} src={image} alt={title} /></div>
        </div>
    )
}
