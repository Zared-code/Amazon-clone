import React from 'react'
import "../style/Subtotal.scss"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();
    const[{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket?.length} items) : <strong>{value}</strong>
                    </p>
                    <div className="subtotal__gift">
                        <input type="checkbox" />This order contain a gift
                    </div>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" €"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
