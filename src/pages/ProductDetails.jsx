import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router"
import productRepository from "../store/ProductsRepository";
import { update } from '../store/products'
import { Link } from "react-router-dom";





export default function ProductDetails() {

    let { id } = useParams();

    // const history = useHistory();
    console.log(id);

    const product = useSelector(state => state.products.products)?.filter(x => x.id === id)[0];  // Selects product from store
    const dispatch = useDispatch(); // gives the function to update store state

    useEffect(() => { // if products are not loaded, requests store to update
        if (!product)
            productRepository.get()
                .then(data => {

                    dispatch(update({ products: data }))
                })
    })

    console.log(product)

    const deleteProduct = () => {
        productRepository.delete(id)
            .then(() => productRepository.get())
            .then(data => {
                dispatch(update({ products: data }))
            })
    }

    // const editProduct = (product) => {
    //     productRepository.edit(product)
    //         .then(() => productRepository.get())
    //         .then(data =>
    //             dispatch(update({ products: data }))
    //         )
    // }
    const addProduct = (product) => {
        productRepository.add(product)
            .then(() => productRepository.get())
            .then(data =>
                dispatch(update({ products: data }))
            )
    }

    const formSubmit = (e) => {
        e.preventDefault()
        let product = {
            name: e.target["name"].value,
            count: e.target["count"].value,
            weight: e.target["weight"].value
        }
        addProduct(product)
    }

if (!product)
    return null;

return (
    <>
        <div className="container-fluid bg">
            <div className="row justify-content-center">
                <div className="col-10">
                    <h1>{product.name}</h1>
                    <p>{product.comments}</p>
                    <p>{product.description}</p>
                    <Link to={`/details/edit${product.id}`}>Edit</Link>
                    <button onClick={deleteProduct} className="delete" >Delete</button>
                    <h3>Or add new</h3>
                    <form  onSubmit={formSubmit}>
                        <input type="text" placeholder="name" name="name" />
                        <input type="text" placeholder="count" name="count" />
                        <input type="text" placeholder="weight" name="weight" />
                        <button>Add Prod</button>
                    </form>
                </div>
            </div>
        </div>
    </>
)
}
