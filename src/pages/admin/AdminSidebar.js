import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { isAuthenticated,signout } from '../auth'

const AdminSidebar = () => {
    const{user:{name,email}} = isAuthenticated()
    const navigate=useNavigate()
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px'}}>
                <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Dashboard</span>
                </Link>
                <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/admin/dashboard" className="nav-link text-white">
                                
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/addcategory" className="nav-link text-white">
                              Add Category
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/addproduct" className="nav-link text-white">
                              Add Product
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link text-white">
                               Go to User Page
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link text-white">
                               
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/allproducts" className="nav-link text-white">
                               
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link text-white">
                                
                                Customers
                            </Link>
                        </li>
                    </ul>
                    <hr/>
                        <div className="dropdown">
                            <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                                    <strong>{name}</strong>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                               
                                <li><Link className="dropdown-item" to="#">{email}</Link></li>
                                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                {
                                isAuthenticated() && (
                                    <button className='btn btn-outline-warning mt-2'
                                        onClick={() => signout(() => {
                                            navigate('/signin')
                                        })}>
                                        Signout
                                    </button>
                                )
                            }
                                </li>
                            </ul>
                        </div>
                    </div>

                </>
                )
}

                export default AdminSidebar
