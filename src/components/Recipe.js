import React from 'react'

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
    width: '30%'
}

const imageStyle = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
}


export default function Recipe(props) {
    const {title, image, sourceUrl} = props.recipe;
    return (
        <div className="col-md-4 m-3" style={card}>
            <a href={sourceUrl}>
                <h4>{title}</h4>
                <div><img style={imageStyle} src={image} alt={title} /></div>
            </a>
        </div>
    )
}
