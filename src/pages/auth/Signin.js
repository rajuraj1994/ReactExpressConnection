import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Link, useNavigate, useLocation,Navigate } from 'react-router-dom'
import { signin,authenticate,isAuthenticated } from './index'


const Signin = () => {
    const navigate = useNavigate()
    const pathname  = useLocation()
    const{user}=isAuthenticated()

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToPage: false
    })

    const { email, password, error, redirectToPage } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setValues({ ...values, error: false })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    authenticate(data,()=>{
                        setValues({ ...values, redirectToPage: true })
                    })          
                }
            })
    }
    // to show error msg
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )
    //to redirect user
    const redirectUser=()=>{
         const redirect = pathname.search ? pathname.search.split('=')[1] : '/user/profile'
        
        if(redirectToPage){
            if(user && user.role===1){
                return navigate('/admin/dashboard')
            }
        }
        if(isAuthenticated() && user.role===0){
            return <Navigate to={redirect}/>
        }
    }
    return (
        <>
            <Navbar />
            <div className="container" style={{ marginBottom: '200px' }}>
                <div className="d-flex justify-content-center">
                    <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                        <form>
                            {showError()}
                            {redirectUser()}

                            <div className="col-12 mb-3">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control" onChange={handleChange('email')} value={email} />
                            </div>
                            <div className="col-12 mb-3">
                                <label for="password">Password</label>
                                <input type="password" name="pass" id="password" placeholder="***********" className="form-control" onChange={handleChange('password')} value={password} />
                            </div>

                            <div className="col-4 mb-3">
                                <button className="btn btn-primary form-control" onClick={handleSubmit}>Signin</button>
                            </div>
                            <div className="col-4 offset-md-8">
                                <Link to="/forgetpassword" className="text-decoration-none text-secondary">Forget Password?</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default Signin
