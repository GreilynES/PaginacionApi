import { useEffect, useState } from "react";
import { Product } from "../../models/Products/Product";
import { getProducts, getProductsbyPage } from "./ProductService";


export const useGetProducts = () => {
    
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
            (async () => {
                const products = await getProducts();
                setProducts(products);
              })();
          }, [])

    return { products };
}


export const useGetProductsbyPage = (tittle:string, skip:number) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
            (async () => {
                const products = await getProductsbyPage(tittle, skip);
                setProducts(products);
              })();
          }, [tittle, skip])

    return { products };
}