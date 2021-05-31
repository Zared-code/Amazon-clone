import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import '../style/Payment.scss'
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    

    function handleSubmit(e) {
        // stripe stuff

    }
    function handleChange(e) {
        // analyse des changements dans le CardElement
        // transmission des erreurs à l'utilisateur concernant les détails de la carte
        
    }


    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>
                    Checkout (
                        <Link to="/checkout"> {basket?.length} {basket.length>=2 ? "items" : "item"}</Link>
                    )
                </h1>

                {/*Payment section - adresse de livraison*/}
                <div className="payment__container--section">
                    <div className="title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="adress">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/*Payment section - liste des items */}
                <div className="payment__container--section">
                    <div className="title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*Payment section - Méthode de paiement */}
                <div className="payment__container--section">
                    <div className="title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="detail">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
