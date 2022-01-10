import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const show= props.item
    return (
        <>

            <div className="col">
                <div className="card shadow-lg">
                    <img src={`http://localhost:8000/${show.product_image}`} className="card-img-top" alt={show.product_name} />
                    <div className="card-body">
                        <h5 className="card-title">{show.product_name}</h5>
                        <h5 className="card-title">Rs.{show.product_price}</h5>
                        <Link className="text-decoration-none" to={`/productdetails/${show._id}`}>
                        <button className="btn btn-success">View Details</button>
                        </Link>
                        

                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
