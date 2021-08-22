import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import {update} from './store/products'
import productRepository from "./store/ProductsRepository";


function App() {

  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products)
      productRepository.get()
        .then(data => {

          dispatch(update({ products: data }))
        })
  })

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/details/:id">
          <ProductDetails/>
        </Route>
      </Switch>

    </>
  );
}

export default App;
