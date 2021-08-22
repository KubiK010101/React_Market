import { Link } from "react-router-dom";
import styles from './ProductCard.module.scss';


export default function ProductCard({ product }) {
    return (
        <>
            <div className="col-sm-12 col-md-4 col-lg-2">
                <div className={styles['product-card']} key={product.id}>

                    <h3>{product.name}</h3>
                    <Link  to={`/details/${product.id}`}><img src={product.imageUrl} alt="" className={styles['product-card__img']}/></Link>
                    <h4 className={styles['product-card__info']}>{product.count}</h4>
                    {/* <h4 className={styles['product-card__info']}>{product.size}</h4> */}
                    <h4 className={styles['product-card__info']}>{product.weight}</h4>
                </div>
            </div>
        </>
    )
}