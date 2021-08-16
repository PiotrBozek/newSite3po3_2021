import React from 'react';
import Product from './Product/Product';
import './styles.css';

const Products = ({ products, flag, ham, mushrooms, peppers, salami, vegetarian, productView }) => {
    
    const productItem = (product) => (
        <Product
            key={product.key}
            id={product.key}
            photo={product.photo}
            name={flag === "pl" ? product.namePl : product.nameEn}
            ingredient={flag === "pl" ? product.ingredientPl : product.ingredientEn}
            price={product.price}
            flag={flag}
            productView={productView}
        />
    )
    
    const vegeFilter = products.filter(name => name.vege);
    const vegeItems = (vegetarian === true ?  vegeFilter : products);
    const hamList = vegeItems.filter(name => name.ingredientPl.includes('szynka'));
    const hamItems = (ham === true ? hamList : vegeItems);
    const peppersList = hamItems.filter(name => name.ingredientPl.includes('papryka'));
    const peppersItems = (peppers === true ? peppersList : hamItems);
    const mushroomsList = peppersItems.filter(name => name.ingredientPl.includes('pieczarki'));
    const mushroomsItems = (mushrooms === true ? mushroomsList : peppersItems);
    const salamiList = mushroomsItems.filter(name => name.ingredientPl.includes('salami'));
    const salamiItems = (salami === true ? salamiList : mushroomsItems);
    const productEnd = salamiItems.map(product => productItem(product));

    return (
        <div className='items-list'>
            {productEnd}
        </div>
    )
}

export default Products
