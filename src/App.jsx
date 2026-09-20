import NotFound from './pages/NotFound'
import SHOP from './pages/SHOP.jsx'
import Newarrivals from './pages/NewArr'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Products from './pages/Product'
import tapeTshirtImg from './assets/tapeTshirt.png';
import skinnyJeansImg from './assets/skinnyJeans.png';
import checkeredShirtImg from './assets/checkeredShirt.png';
import stripedTshirtImg from './assets/stripedTshirt.png';
import Service from './pages/ServicesPage'
import Cart from './pages/Cart'

function App() {

  return (
 <div className='overflow-x-hidden'>

    <BrowserRouter>

      <Routes>
        <Route path="*" element={<NotFound/>} />
         <Route path="/" element={<SHOP/>} />
         <Route path="/Cart" element={<Cart/>} />
         <Route path="/Products" element={<Products/>} />
         <Route path="/Service" element={<Service/>} />
         <Route path="/NewArrivals" element={<Newarrivals/>} /> 
      </Routes>
    </BrowserRouter>
 
 </div>
  )
}

export default App
