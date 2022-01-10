import React from 'react'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar/>
                </div>
                <div className="col-md-6">
                    <h1>Welcome to admin Dashboard</h1>
                    <h2>You can now manage products,users and orders from here</h2>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default AdminDashboard
