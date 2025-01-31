import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'
import Header from './component/Header'
import ProductList from './component/ProductList'
import ProductDetail from './component/ProductDetail'
import Cart from './component/Cart'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
