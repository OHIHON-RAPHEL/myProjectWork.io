import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'


import Banner from './components/Banner'
import Row from './components/Row'
import Header from './components/Header'
import Cart from './pages/cart/Cart'
import Jumia from './pages/jumia/Jumia'
import Accounts from './pages/accounts/Accounts'
import Orders from './pages/orders/Orders'
import Product from './pages/product/Product'
import Checkout from './pages/checkout/Checkout'
import Market from './pages/market/Market'
import Help from './pages/help/Help'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import PaymentOption from './pages/paymentoption/PaymentOption'
import TrackOrder from './pages/trackorder/TrackOrder'
import Cancelorder from './pages/cancelorder/Cancelorder'
import Sell from './pages/sell/Sell'
import Catelog from './pages/catelog/Catelog'
import Return from './pages/return/Return'
import Footer from './components/Footer'


const App = () => {
  const [relatedItems, setRelatedItems] = useState()
  const [addedItem, setAddedItem] = useState()
  const [checkoutItem, setCheckoutItem] = useState([])

  return (
    <BrowserRouter>
      <Banner />
      <Row />
      <Header checkoutItem={checkoutItem} />
      <Routes>
        <Route index element={<Jumia setRelatedItems={setRelatedItems} setAddedItem={setAddedItem}/>}/>
        <Route path='cart' element={<Cart checkoutItem={checkoutItem} setCheckoutItem={setCheckoutItem}/>}/>
        <Route path='accounts' element={<Accounts/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='product' element={<Product relatedItems={relatedItems} setAddedItem={setAddedItem}/>}/>
        <Route path='checkout' element={<Checkout addedItem={addedItem} setCheckoutItem={setCheckoutItem}/>}/>
        <Route path='market' element={<Market relatedItems={relatedItems}/>}/>
        <Route path='catelog' element={<Catelog />}/>
        <Route path='help' element={<Help/>}/>
        <Route path='placeorder' element={<PlaceOrder/>}/>
        <Route path='paymentOption' element={<PaymentOption/>}/>
        <Route path='trackOrder' element={<TrackOrder/>}/>
        <Route path='cancelorder' element={<Cancelorder/>}/>
        <Route path='return' element={<Return/>}/>
        <Route path='sell' element={<Sell/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App