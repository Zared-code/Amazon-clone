import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51ItzojHD53KRYGMTu80ANwy1xwc2X70qkCa9oURPzXUEtdWIY3ThMmPzlpcIZknCNzAXFZM6kuO1fsu4YpHaq9DU00XTrq8pOy');

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is ", authUser);

      if (authUser) {
        // the user is logged
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is not logged
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []) // will only run once when component load

  return (
    <Router>

      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
