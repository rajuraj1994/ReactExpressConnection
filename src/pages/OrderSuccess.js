import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const OrderSuccess = () => {
    return (
        <>
        <Navbar/>
        <div className='container mb-5'>
            <div className='row justify-content-center'>
                <div className='col-6 mt-5 text-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfz3upZJUzgki4bn27faJf6gPIIo7Yo5HxZg&usqp=CAU" className='img-fluid my-5 d-block mx-auto' alt="order success" height="200" width="200"/>
                    <h2>Your Order has been placed successfully</h2>
                    <Link to="/user/profile">Go to Orders</Link>
                </div>
            </div>

        </div>

        <Footer/>
            
        </>
    )
}

export default OrderSuccess
