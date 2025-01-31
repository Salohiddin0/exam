import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='product-list'>
      <h1>ALL PRODUCTS</h1>
      <div className='products-grid'>
        {products.map(product => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className='product-card'
          >
            <img
              src={product.image || '/placeholder.svg'}
              alt={product.title}
              className='product-image'
            />
            <div className='product-info'>
              <h3>{product.title}</h3>
              <p className='product-price'>${product.price.toFixed(2)}</p>
              <p className='product-category'>{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList
