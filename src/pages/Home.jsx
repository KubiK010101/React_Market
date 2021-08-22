import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/products'
import productRepository from '../store/ProductsRepository'
import { ProductCard } from '../components/product-card'

export default function Home() {
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
        <div className="container-fluid bg">
            <div className="row">
                <h1>Product Market</h1>
                {products ? products.map((x) =>
                    <ProductCard product={x}></ProductCard>
                ) : null}
            
            </div>
        </div>
    )
}