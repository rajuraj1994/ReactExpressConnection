import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { isAuthenticated } from './index'

const UserDashboard = () => {
    const {user} = isAuthenticated()
    return (
        <>
        <Navbar/>
        <h1>User Information</h1>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>

        <Footer/>
            
        </>
    )
}

export default UserDashboard
