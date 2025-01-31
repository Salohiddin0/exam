import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import '../style/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [id])

  if (loading || !product) {
    return <div className='loading'>Loading...</div>
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
  }

  return (
    <div className='product-detail'>
      <div className='product-image-container'>
        <img
          src={product.image || '/placeholder.svg'}
          alt={product.title}
          className='product-image'
        />
      </div>
      <div className='product-info'>
        <h1>{product.title}</h1>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>${product.price.toFixed(2)}</p>
        <p className='product-category'>Category: {product.category}</p>
        <div className='product-rating'>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <div className='quantity-selector'>
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
        <button className='add-to-cart-btn' onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
