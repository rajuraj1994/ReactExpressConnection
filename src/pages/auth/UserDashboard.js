import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { isAuthenticated } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders, clearError } from '../../actions/orderActions'

const UserDashboard = () => {
    const { user } = isAuthenticated()
    const dispatch = useDispatch()
    const { loading, error, orders } = useSelector(state => state.myOrders)

    useEffect(() => {
        dispatch(myOrders())
    }, [dispatch, error])

    return (
        <>
            <Navbar />
            <div className="container">
                <div className='row my-5'>
                    <div className='col-md-4 shadow-lg'>
                        <h2>Basic Info</h2>
                        <hr/>
                        <h3>Name:{user.name}</h3>
                        <hr/>
                        <h4>Email:{user.email}</h4>
                    </div>
                    <div className='col-md-8'>
                        <h2 className='text-center text-muted'>
                            My Orders History
                        </h2>
                        <div className="d-flex justify-content-center">

                            <table className='table table-success table-striped text-center table-bordered'>
                                <thead>
                                    <tr>
                                        <th>OrderId</th>
                                        <th>Number of Items</th>
                                        <th>Total Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders && orders.map((order, i) => (
                                        <tr key={i}>
                                            <td>{order._id}</td>
                                            <td>{order.orderItems.length}</td>
                                            <td>{`Rs. ${order.totalPrice}`}</td>
                                            <td>
                                                {order.status && String(order.status).includes('delivered') ? <p style={{ color: 'green' }}>{order.status}</p> :
                                                    <p style={{ color: 'red' }}>{order.status}</p>
                                                }
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>





            </div>


            <Footer />

        </>
    )
}

export default UserDashboard
