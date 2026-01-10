import { NavLink, Routes, Route, Outlet } from 'react-router-dom'
import '../App.css'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ProductListing from '../pages/ProductListing'
import Login from '../pages/Login'
import Account from '../pages/Account'
import Favorites from '../pages/Favorites'
import NotFound from '../pages/NotFound'
import ShopLayout from '../layouts/ShopLayout'

function SharedLayout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/account/favorites">Favorites</NavLink>
      </nav>
      <main>
        <Outlet /> {/* where rest of UI will be rendered */}
      </main>
    </div>
  )
}
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="shop" element={<ShopLayout />}>
            <Route index element={<Shop />}/>
            <Route path="products/:productId" element={<ProductListing />}/>
          </Route>
          <Route path="login" element={<Login />}/>
          <Route path="account" element={<Account />}/>
          <Route path="account/favorites" element={<Favorites />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
