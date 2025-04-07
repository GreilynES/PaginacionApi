import { useRef, useState } from "react";
import { useGetProducts, useGetProductsbyPage } from "../../services/Products/ProductHooks"
import ProductCard from "../../cards/ProductCards/ProductCard";

const ProductsPages = () => {
    const [page, setPage] = useState(0);
    const [tittle, setTittle] = useState('')
    const input1 = useRef<HTMLInputElement>(null);

    const { products } = useGetProductsbyPage(tittle, page);

    const handleNext = () =>{
        if(page<192){
        setPage((prev)=>prev+24);
        }
        console.log(page)
      }

      const handlePrevious = () =>{
        if(page>0){
        setPage((prev)=>prev-24);
        }
        console.log(page)
      }

      const GetInputValue = () =>{
        const element1 = input1.current;
        setPage(0);
        setTittle(element1?.value || '');
        console.log(element1?.value);
    }

  return (
    <div>
        <input ref={input1} type="text" /><button onClick={GetInputValue}>Buscar</button>
        <div className='card-container'>
        {products.map(product=>(
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="buttons-container">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default ProductsPages