export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    stock: number,
    tags: string[],
    brand: string,
    images: string[],
    thumbnail: string
  }

  export const ProductInitialState ={
    id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    tags: [],
    brand: '',
    images: [],
    thumbnail: ''
  }