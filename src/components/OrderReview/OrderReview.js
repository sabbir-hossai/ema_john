import React from 'react';
import { NavLink } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    const [product] = useProduct();
    const [cart, setCart] = useCart(product);
    const removeProduct = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    const handelPlaceOrder = () => {
        setCart([]);
        clearTheCart()

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem removeProduct={removeProduct} key={product.key} product={product}></ReviewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}> <NavLink to="/placeOrder">
                    <button onClick={handelPlaceOrder} className="btn-regular">place order</button>
                </NavLink></Cart>
            </div>
        </div>
    );
};

export default OrderReview;