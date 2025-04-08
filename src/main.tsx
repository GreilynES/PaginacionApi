import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ListProducts from './pages/Products/ListProducts.tsx'
import ProductsPages from './pages/Products/ProductsPages.tsx'
import ProductsSection from './pages/Products/ProductsSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsSection />
  </StrictMode>,
)
