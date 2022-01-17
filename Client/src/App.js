import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Body/Navbar"
import Footer from './components/Body/Footer'
import Home from './components/Pages/Home';
import EditProfile from './components/myAccount/EditProfile';
const ProductPage = React.lazy(() => import('./components/Pages/ProductPage'))
const Order = React.lazy(() => import("./components/Pages/Order"))
const MyAccount = React.lazy(() => import('./components/Pages/MyAccount'))
const Login = React.lazy(() => import('./components/LoginModule/Login'))
const RecoverPassword = React.lazy(() => import('./components/LoginModule/RecoverPassword'))
const ForgotPassword = React.lazy(() => import('./components/LoginModule/ForgotPassword'))
const Register = React.lazy(() => import('./components/LoginModule/Register'))
const AddProduct = React.lazy(() => import('./components/admin/AddProduct'))
const AddColor = React.lazy(() => import('./components/admin/AddColor'))
const AddCategory = React.lazy(() => import('./components/admin/AddCategory'))
const Cart = React.lazy(() => import('./components/Pages/Cart'))
const Profile = React.lazy(() => import('./components/myAccount/Profile'))
const Address = React.lazy(() => import('./components/myAccount/Address'))
const ChangePAssword = React.lazy(() => import('./components/myAccount/ChangePAssword'))
const AllProduct = React.lazy(() => import('./components/Product filter/AllProduct'))
const Categories = React.lazy(() => import('./components/Product filter/Categories'))
const Color = React.lazy(() => import('./components/Product filter/Color'))
const Checkout = React.lazy(() => import('./components/Pages/Checkout'))
const Invoice = React.lazy(() => import('./components/Pages/Invoice'))
const TermsAndConditions = React.lazy(() => import('./components/Body/TermsAndConditions'))
const ProductDetail = React.lazy(() => import('./components/Pages/ProductDetail'));
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/recoverpassword/:email" element={<RecoverPassword />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addcolor" element={<AddColor />} />
          <Route path="/myAccount" element={<MyAccount />}>
            <Route path="/myAccount/order" element={<Order />} />
            <Route path="/myAccount/" element={<Profile />} />
            <Route path="/myAccount/changePAssword" element={<ChangePAssword />} />
            <Route path="/myAccount/address" element={<Address />} />
            <Route path="/myAccount/editprofile" element={<EditProfile/>}/>
          </Route>
          <Route path="/order" element={<Order />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/productpage" element={<ProductPage />}>
            <Route path="/productpage/" element={<AllProduct />} />
            <Route path="/productpage/category/:cname" element={<Categories />} />
            <Route path="/productpage/color/:cname" element={<Color />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
