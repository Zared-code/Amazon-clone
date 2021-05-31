import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import '../style/Header.scss';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase'

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    function handleAuthentification() {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__search--input" />
                <SearchIcon className="header__search--icon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentification} className="header__nav--option">
                        <p className="lineone">Hello {user ? user?.email : 'Guest'}</p>
                        <p className="linetwo">{user ? "Sign out" : "Sign in"}</p>
                    </div>
                </Link>
                <div className="header__nav--option">
                    <p className="lineone">Returns</p>
                    <p className="linetwo">& Orders</p>
                </div>
                <div className="header__nav--option">
                    <p className="lineone">Your</p>
                    <p className="linetwo">Prime</p>
                </div>
                <Link to="/checkout">
                    <div className="header__nav--optionbasket">
                        <ShoppingBasketIcon />
                        <p className="linetwo count">{basket?.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
