import React, {  useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/products'
import productRepository from '../store/ProductsRepository'
import ProductCard from './product-card/ProductCard';

export function Product() {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    console.log(products)

    useEffect(() => {
        if (!products)
            productRepository.get()
                .then(data => {

                    dispatch(update({ products: data }))
                })
    })
    //   console.log(products);




    return (
        <div>
            <div>
                {products ? "Hello" : "Bye"}
                <ProductCard></ProductCard>
                
            </div>
        </div>
    )
}