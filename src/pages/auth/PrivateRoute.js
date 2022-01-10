import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
import { isAuthenticated } from './index'

const PrivateRoute=()=>(
   
        isAuthenticated() && isAuthenticated().user.role===0 ?
        <Outlet/> :(
            <Navigate to="/signin" />
        )
           
)

export default PrivateRoute
