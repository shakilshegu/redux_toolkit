import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
   <Fragment>
    <Header/>
    <ProductList/>
   </Fragment>
  );
}

export default App;
