import { Fragment,useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
// import Card from "./components/UI/Card";


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler =() =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <h1>React's Restaurant </h1>
    <Header onShowCart={showCartHandler}></Header>
    <main>
      <Meals></Meals>

    </main>
   
    </Fragment>
  );
}

export default App;
