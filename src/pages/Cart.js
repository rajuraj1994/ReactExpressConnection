import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../actions/cartActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const navigate = useNavigate()
    
    const increaseQty=(id,quantity,stock) => {
        const newQuantity= quantity+1
        if(newQuantity>stock)
        return 
        dispatch(addItemToCart(id,newQuantity))
    }
    const decreaseQty=(id,quantity) => {
        const newQty= quantity-1
        if(newQty < 1)
        return
        dispatch(addItemToCart(id,newQty))
    }

    const removeCartHandler=(id,name) => {
        dispatch(removeItemFromCart(id))
        toast.success(`${name} is remove from the cart`)
    }

    const shippingHandler=()=>{
        navigate('/signin?redirect=shipping')
    }


    return (
        <>
            <Navbar />
            <ToastContainer position='top-center' theme='colored'/>
            {cartItems.length === 0 ?
                <h2 className='mt-5 text-danger text-center'>Your cart is Empty</h2>
                : (
                    <>
                        <div className="container">
                            <div className="row d-flex justify-content-between mt-5 mb-3">
                                <h2 className="text-center">Your Cart Items</h2>
                                <div className="col-md-8 shadow">
                                    {cartItems.map((item, i) => (
                                        <Fragment key={i}>
                                            <hr />
                                            <div className='row align-items-center'>
                                                <div className="col-3">
                                                    <img src={`http://localhost:8000/${item.image}`} alt={item.name} width="50" />
                                                </div>
                                                <div className="col-3">
                                                    <b><span>{item.name}</span></b>
                                                </div>
                                                <div className="col-2 text-warning">Rs.{item.price}</div>
                                                <div className="col-3">
                                                    <div className='d-flex'>
                                                        <button className='btn btn-danger'
                                                        onClick={()=>decreaseQty(item.product,item.quantity)}>-</button>&nbsp;
                                                        <input type="number" value={item.quantity} readOnly className='form-control border-0'/>
                                                        &nbsp;
                                                        <button className='btn btn-primary'
                                                        onClick={()=>increaseQty(item.product,item.quantity,item.stock)}
                                                        >+</button>
                                                    </div>
                                                </div>
                                                <div className="col-1">
                                                    <button className="btn btn-danger"
                                                    onClick={()=>removeCartHandler(item.product,item.name)}
                                                    >
                                                    <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr/>

                                        </Fragment>
                                    ))}


                                </div>
                                <div className="col-md-3">
                                    <div className="shadow p-2">
                                        <h5>Cart Summary</h5>
                                        <hr />
                                        <span><b>Units:</b> {cartItems.reduce((ac,item)=> (ac+Number(item.quantity)),0)} (Units)</span><br />
                                        <span><b>Total:</b> Rs.{cartItems.reduce((ac,item)=>(ac+item.quantity*item.price),0)}</span>
                                        <hr />
                                        <button className="btn btn-warning" onClick={shippingHandler}>Check Out</button>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </>
                )
            }


            <Footer />
        </>
    )
}

export default Cart
