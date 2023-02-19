import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";


function App() {
  return (
    <Fragment>
    <h1>React's Restaurant </h1>
    <Header></Header>
    <main>
      <Meals></Meals>

    </main>
    </Fragment>
  );
}

export default App;
