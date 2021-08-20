import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router"
import productRepository from "../store/ProductsRepository";
import products, { update } from '../store/products'
import { Link } from "react-router-dom";
export default function ProductEdit(){

    // let { id } = useParams();

    // const history = useHistory();
    // console.log(id);

    // const product = useSelector(state => state.products.products)?.filter(x => x.id == id)[0];  // Selects product from store
    // const dispatch = useDispatch(); // gives the function to update store state

    // useEffect(() => { // if products are not loaded, requests store to update
    //     if (!product)
    //         productRepository.get()
    //             .then(data => {

    //                 dispatch(update({ products: data }))
    //             })
    // })

    // console.log(product)
    // if (!product)
    //     return null;


    return(
        <>
           <input type="text" />
        </>
    )
}