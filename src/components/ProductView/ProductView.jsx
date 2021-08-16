import React from 'react'

const ProductView = ({ props }) => {
    console.log(props);
    return (
        <div>
            Product view
            {props}
        </div>
    )
}

export default ProductView
