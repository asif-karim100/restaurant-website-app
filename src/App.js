import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
// import Card from "./components/UI/Card";


function App() {
  return (
    <Fragment>
      <Cart/>
    <h1>React's Restaurant </h1>
    <Header></Header>
    <main>
      <Meals></Meals>

    </main>
   
    </Fragment>
  );
}

export default App;
