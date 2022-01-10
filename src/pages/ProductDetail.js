import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { productsDetails, listRelated } from '../components/uiApi'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../actions/cartActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [relatedProduct, setRelatedProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const params = useParams()

    const loadSingleProduct = productId => {
        productsDetails(productId).then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setProduct(data)
                //after fetching priduct details fetch related product by category id
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error)
                    }
                    else {
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }
    useEffect(() => {
        const productId = params.productId
        loadSingleProduct(productId)
    }, [params.productId])
    
    const addToCart=()=>{
        dispatch(addItemToCart(params.productId,quantity))
        toast.success(`${product.product_name} is added to cart`)
    }

    return (
        <>
            <Navbar />
            <ToastContainer position='top-center' theme='colored' />
            <div className="card shadow-lg mb-3 mt-4 offset-md-3" style={{ maxWidth: '800px' }}>
                <div className="row">
                    <div className="col-md-6 my-3 p-3">
                        <img src={`http://localhost:8000/${product.product_image}`} className="img-fluid" alt={product.product_name} />
                    </div>
                    <div className="col-md-6 my-3">
                        <div className="card-body">
                            <h5 className="card-title">{product.product_name}</h5>
                            <h5 className="card-text">Rs.{product.product_price}</h5>
                            <p className="card-text">{product.product_description}</p>
                            <input type="hidden" value={quantity} />
                            <button
                                className="btn btn-success"
                                onClick={addToCart}
                            >
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

            </div>
            {relatedProduct.length > 0 && (
                <div className="container my-3">
                    <h2 className="my-2 text-center">Related Product</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {relatedProduct.map((product, i) => (
                            <Card key={i} item={product} />
                        ))}
                    </div>
                </div>
            )}
            <Footer />

        </>
    )
}

export default ProductDetail
