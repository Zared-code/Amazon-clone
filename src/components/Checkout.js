import React from 'react'
import '../style/Checkout.scss'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {

    const[{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" className="checkout__left--ad" />
                <div className="checkout__left--title">
                    <h2 className="title">Your shopping Basket</h2>

                    {basket.map( item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
