import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../style/Header.css'

const Header = () => {
  const cartItems = useSelector(state => state.cart)
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/' className='logo'>
          Store
        </Link>
        <div className='search-container'>
          <input
            type='search'
            placeholder='SEARCHING...'
            className='search-input'
          />
        </div>
        <Link to='/cart' className='cart-icon'>
          🛒 <span className='cart-count'>{cartItemsCount}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
