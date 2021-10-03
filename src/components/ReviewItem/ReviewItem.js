import React from 'react';

const ReviewItem = (props) => {

    const { removeProduct } = props;
    const { name, key, price, quantity } = props.product;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price:{price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => removeProduct(key)} className="btn-regular">Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;