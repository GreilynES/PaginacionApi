import { apiTienda } from "../../api/apiConfig";
import { Product } from "../../models/Products/Product";


export async function getProducts(): Promise<Product[]>{
    const response = await fetch(`${apiTienda}/products?limit=0`);
    const data = await response.json();
    return data.products;  //.products porque en el json viene como products
}

export async function getProductsbyPage(tittle: string, skip: number): Promise<Product[]>{
    const response = await fetch(`${apiTienda}/products/search?q=${tittle}&limit=24&skip=${skip}`);
    const data = await response.json();
    return data.products;  
}