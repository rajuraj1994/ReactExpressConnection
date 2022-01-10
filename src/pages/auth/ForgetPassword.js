import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { forgetpassword } from './index'

const ForgetPassword = () => {

    const [values, setValues] = useState({
        email: '',
        error: '',
        success: ''
    })

    const { email, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setValues({ ...values, error: false })
        //forgetpassword function
        forgetpassword({ email })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({ ...values, email: '', success: true })
                }
            })
    }

    // to show error msg
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    //to show success msg
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Password reset link has been sent to your mail
        </div>
    )


    return (
        <>
            <Navbar />
            <div className="container" style={{ marginBottom: '200px' }}>
                <div className="d-flex justify-content-center">
                    <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                        <form>
                            {showError()}
                            {showSuccess()}

                            <div className="col-12 mb-3">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control" onChange={handleChange('email')} value={email} />
                            </div>


                            <div className="col-4 mb-3">
                                <button className="btn btn-primary form-control" onClick={handleSubmit}>Send Link</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default ForgetPassword
