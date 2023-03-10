import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import React, { useEffect } from "react";
import '../styles/App.css';
import Login from "./Login";
import Signup from "./Signup";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Navlinks from "./Navlinks";
import Footer from "./Footer";


const App = () => {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const userauth=sessionStorage.getItem("userAuth");
    
      if (userauth) {
        dispatch({
          type: "SET_LOGIN",
          user: userauth,
        });
      } else {
        dispatch({
          type: "SET_LOGIN",
          user: null,
        });
      }
   
  }, []);
  return (
    <Router>
      <div className="App" id="main">
        <Switch>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/checkout">
            <Header />
            <Navlinks />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Navlinks />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




export default App;
