import React from 'react'
import '../style/CheckoutProduct.scss'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, price, title, rating }) {

    const[{basket}, dispatch] = useStateValue();

    function removeFromBasket() {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img src={image} alt="test" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__info--title'>{title}</p>
                <p className='checkoutProduct__info--price'>
                    <strong>{price}</strong>
                    <small> €</small>
                </p>
                <div className="checkoutProduct__info--rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
