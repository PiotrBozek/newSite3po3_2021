import React from 'react';
import './styles.css';

const Product = (props) => {

    const name = props.name.toUpperCase();
    const items = props.ingredient.toString().replace(/,/g, ", ");
    const price = props.price.map((one) => <p key={one}>{one}<span>zł</span></p>);
    
    
    const picture = `./photos/${props.photo}.jpg`;
   

    return (
        <div className="cards" onClick={() => props.productView(props.id)}>
            <div className="card">
                <div>
                    <img className="image" src={picture} alt={`Pizza ${name}`} />
                </div>
                <div className="ui content data containerName">
                    <div className="name">
                        <div className="name-pizza">
                            {name.toUpperCase()}
                        </div>
                        <div className="ingredient">
                            <p>{items}</p>
                        </div>
                    </div>
                    <div className="price">
                        {price}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Product
