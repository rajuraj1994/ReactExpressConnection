import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Confirm from './pages/auth/Confirm'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Cart from './pages/Cart'
import Deals from './pages/Deals'
import HomePage from './pages/HomePage'
import PrivateRoute from './pages/auth/PrivateRoute'
import AdminRoute from './pages/auth/AdminRoute'
import UserDashboard from './pages/auth/UserDashboard'
import ForgetPassword from './pages/auth/ForgetPassword'
import ResetPassword from './pages/auth/ResetPassword'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddCategory from './pages/admin/AddCategory'
import AddProduct from './pages/admin/AddProduct'
import AllProducts from './pages/admin/AllProducts'
import ProductDetail from './pages/ProductDetail'
import Shipping from './pages/Shipping'
import ConfirmOrder from './pages/ConfirmOrder'
import Payment from './pages/Payment'
import PaymentElement from './pages/PaymentElement'
import OrderSuccess from './pages/OrderSuccess'




const MyRoute = () => {
   
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/productdetails/:productId" element={<ProductDetail/>} />
                <Route path="/signup" element={ <Signup/> } />
                <Route path="/signin" element={ <Signin/> } />
                <Route path="/cart" element={ <Cart/> } /> 
                <Route path="/deals" element={ <Deals/> } /> 
                <Route path="/email/confirmation/:token" element={ <Confirm/> } /> 
                <Route  path="/" element={<PrivateRoute/>}>
                     <Route  path="/user/profile" element={<UserDashboard/>} />
                     <Route path="/signin/shipping" element={<Shipping/>} />
                     <Route path="/confirm" element={<ConfirmOrder/>} />
                     <Route path="/payment" element={<PaymentElement/>} />
                     <Route path="/success" element={<OrderSuccess/>} />
                 
                 </Route>
                 <Route path="/forgetpassword" element={<ForgetPassword/>} />
                 <Route path="/reset/password/:token" element={<ResetPassword/>} />

                 {/* admin */}
                 <Route path="/" element={<AdminRoute/>} >
                     <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
                     <Route path="/admin/addcategory" element={<AddCategory/>} />
                     <Route path="/admin/addproduct" element={<AddProduct/>} />
                     <Route path="/admin/allproducts" element={<AllProducts/>} />
                 </Route>
                 
                 
            </Routes>
        </Router>
    )
}

export default MyRoute
