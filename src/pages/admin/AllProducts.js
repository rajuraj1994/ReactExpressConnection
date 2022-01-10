import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import { allproducts } from './apiIndex'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    const loadProducts = () => {
        allproducts().then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setProducts(data)
            }
        })
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-8 mt-4">
                        <h2 className="text-center text-muted">
                            Here are total {products.length} Products
                        </h2>
                        <hr />
                        <table className="table table-bordered table-secondary">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Stock Available</th>
                                    <th>Product Description</th>
                                    <th>Product Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.product_name}</td>
                                        <td>{item.product_price}</td>
                                        <td>{item.countInStock}</td>
                                        <td>{item.product_description}</td>
                                        <td>
                                            <img src={`http://localhost:8000/${item.product_image}`} alt={item.product_name} className="img-fluid" width="130" />
                                        </td>
                                        <td>
                                            <Link to="#" className="btn btn-warning">
                                                Update
                                            </Link>
                                            <Link to="#" className="btn btn-danger">
                                                Delete
                                            </Link>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllProducts
