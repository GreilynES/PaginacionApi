import React, { useState } from 'react';
import { useGetProductsbySections } from '../../services/Products/ProductHooks';
import ProductCard from '../../cards/ProductCards/ProductCard';

const ProductsSection = () => {
  const [page, setPage] = useState(0);
  const { products } = useGetProductsbySections(page);
  
  //  para cada botón
  const pageValues = [0, 24, 48, 72, 96, 120];

  return (
    <div>
      <div className='card-container'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="buttons-container">
        {pageValues.map((value, i) => (  //value es el valor del array y i es  la posicion
          <button key={i} 
            onClick={() => {
              setPage(value);
              console.log(value);
            }}
          >
            {i + 1} 
          </button>//el i+1 es porque  inicia en 0 
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;