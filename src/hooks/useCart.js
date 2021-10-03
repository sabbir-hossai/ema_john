import { useEffect } from "react";
import { useState } from "react"
import Product from "../components/Product/Product";
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storedCart = [];
            for (const key in saveCart) {
                const addredProduct = products.find(product => product.key === key);
                if (addredProduct) {
                    const quantity = saveCart[key];
                    addredProduct.quantity = quantity;
                    storedCart.push(addredProduct);
                }
            }
            setCart(storedCart)
        }

    }, [products])
    return [cart, setCart];
}
export default useCart;