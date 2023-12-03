import { Fragment } from "react";
import "./App.css";
import {ProductList,Header} from "./components";

function App() {
  return (
   <Fragment>
    <Header/>
    <ProductList/>
   </Fragment>
  );
}

export default App;
