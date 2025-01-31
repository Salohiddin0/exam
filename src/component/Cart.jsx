import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../store/cartSlice'
import '../style/Cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id))
  }

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className='cart-item'>
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                className='cart-item-image'
              />
              <div className='cart-item-details'>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className='quantity-selector'>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(
                        item.id,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className='remove-btn'
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className='cart-total'>
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className='checkout-btn'>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
