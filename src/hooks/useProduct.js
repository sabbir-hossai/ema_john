import { useEffect } from 'react';
import { useState } from 'react';
const useProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])
    return [product];
}

export default useProduct;