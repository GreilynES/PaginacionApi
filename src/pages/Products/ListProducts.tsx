import React from 'react'
import { useGetProducts } from '../../services/Products/ProductHooks';
import ProductCard from '../../cards/ProductCards/ProductCard';

const ListProducts = () => {
const {products} = useGetProducts();

  return (
    <div>
        <div className='card-container'>
        {products.map(product=>(
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ListProducts