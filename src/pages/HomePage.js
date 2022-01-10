import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getProducts } from '../components/uiApi'

const HomePage = () => {
    const [producstByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setProductsByArrival(data)
            }
        })
    }
    useEffect(() => {
        loadProductsByArrival()
    }, [])

    return (
        <>
            <Navbar />
            <Carousel />
            <div className="container-fluid">
                <div className="my-2 shadow p-2">
                    <h2 className="text-center">Latest Products</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {producstByArrival.map((product,i)=>(
                         <Card key={i} item={product} />
                    ))}
                   
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage
