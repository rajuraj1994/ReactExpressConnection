import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { API } from '../../config'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {

    const params=useParams()

    const [values,setValues] = useState({
        email:'',
        password:'',
        error:'',
        success:false
    })
      
    const{email,password,error,success}=values

    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setValues({...values,error:false})
        const token=params.token
        //reset password
        fetch(`${API}/resetpassword/${token}`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({...values,error:'',email:'',password:'',success:true})
            }
        })
        .catch(err=>console.log(err))
    }

     // to show error msg
     const showError=()=>(
        <div className="alert alert-danger" style={{display:error?'':'none'}}>
            {error}
        </div>
    )

    //to show success msg
    const showSuccess=()=>(
        <div className="alert alert-info" style={{display:success?'':'none'}}>
       Password has been reset successfully,login to continue
    </div>
    )
    return (
        <>
        <Navbar/>
        <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                        <form>
                            {showError()}
                            {showSuccess()}
                            
                            <div className="col-12 mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control"
                                onChange={handleChange('email')} value={email}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="pass" id="password" placeholder="***********" className="form-control"
                                onChange={handleChange('password')} value={password}
                                />
                            </div>
                            
                            <div className="col-6">
                                <button className="btn btn-primary form-control"
                                onClick={handleSubmit}
                                >Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        <Footer/>
            
        </>
    )
}

export default ResetPassword
