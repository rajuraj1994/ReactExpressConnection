import React,{useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { countries } from 'countries-list'
import { useDispatch, useSelector } from 'react-redux'
import {saveShippingInfo} from '../actions/cartActions'
import {useNavigate} from 'react-router-dom'

const Shipping = () => {
    const navigate = useNavigate()

    const countriesList = Object.values(countries)

    const {shippingInfo} =useSelector( state => state.cart)

    const [shippingAddress1,setShippingAddress1] =useState(shippingInfo.shippingAddress1)
    const [shippingAddress2,setShippingAddress2] =useState(shippingInfo.shippingAddress2)
    const [city,setCity] =useState(shippingInfo.city)
    const [zip,setZip] =useState(shippingInfo.zip)
    const [country,setCountry] =useState(shippingInfo.country)
    const [phone,setPhone] =useState(shippingInfo.phone)

    const dispatch = useDispatch()

    const submitHandler=(e) => {
        e.preventDefault()
        dispatch(saveShippingInfo({shippingAddress1,shippingAddress2,city,zip,country,phone}))
        navigate('/confirm')
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='col-md-5 offset-md-3 p-3 my-4 shadow-lg'>
                    <form>
                        <h2 className='mb-3'>
                            Shipping Information
                        </h2>
                        <div className='mb-3'>
                            <label htmlFor='address1'>ShippingAddress1</label>
                            <input type="text" className='form-control' id="address1"
                            onChange={(e)=>setShippingAddress1(e.target.value)} value={shippingAddress1}
                             />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address2'>ShippingAddress2</label>
                            <input type="text" className='form-control' id="address2" 
                            onChange={(e)=>setShippingAddress2(e.target.value)} value={shippingAddress2}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='city'>City</label>
                            <input type="text" className='form-control' id="city" 
                            onChange={(e)=>setCity(e.target.value)} value={city}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='zip'>Zip Code</label>
                            <input type="number" className='form-control' id="zip" 
                            onChange={(e)=>setZip(e.target.value)} value={zip}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phone'>Phone Number</label>
                            <input type="number" className='form-control' id="phone" 
                            onChange={(e)=>setPhone(e.target.value)} value={phone}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='country'>Country</label>
                           <select className='form-control' id="country"
                           onChange={(e)=>setCountry(e.target.value)} 
                           >
                               <option value={country}>{country}</option>
                               {countriesList.map(country=> (
                                   <option key={country.name} value={country.name}>{country.name}</option>

                               ))}
                               

                           </select>
                        </div>
                        <div className='mb-3'>
                            <button className='btn btn-warning form-control'
                            onClick={submitHandler}
                            >
                                Continue
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Shipping
