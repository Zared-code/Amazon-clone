import React from 'react'
import '../style/Product.scss'
import { useStateValue } from './StateProvider';

function Product( { id, title, price, image, rating}) {

    const [{basket}, dispatch] = useStateValue();

    function addToBasket() {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product' key={id}>
            <div className="product__info">
                <p className="title">{title}</p>
                <p className="price">{price} €</p>
                <div className="product__info--rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="produit"/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
