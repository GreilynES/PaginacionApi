import { Product } from "../../models/Products/Product"

type CardProductProps={
    product: Product
}

const ProductCard = ({product}:CardProductProps) => {
    return (
        <div className='card' key={product.id}>
            <img src={product.thumbnail} alt="" />
            <div>{product.title}</div>
            <div>{product.category}</div>
            <div>${product.price}</div>
    
        </div>
    )
}

export default ProductCard
