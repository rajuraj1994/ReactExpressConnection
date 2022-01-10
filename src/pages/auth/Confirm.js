import React,{useState,useEffect} from 'react'
import { API } from '../../config'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom'

const Confirm = () => {
    const params=useParams()

    const [values,setValues] = useState({
        error:'',
        success:false
    })
    const{error,success} = values

    useEffect(()=>{
        const token=params.token
        fetch(`${API}/confirmation/${token}`,{
            method:"POST",
            headers:{
                Accept:'application/json',
                "Content-Type":'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({...values,error:'',success:true})
            }
        })
        .catch(err=>console.log(err))
    },[params.token,values])

     // to show error msg
     const showError=()=>(
        <div className="alert alert-danger" style={{display:error?'':'none'}}>
            {error}
        </div>
    )

    //to show success msg
    const showSuccess=()=>(
        <div className="alert alert-info" style={{display:success?'':'none'}}>
      Your account has been verified,login to continue
    </div>
    )
    return (
        <>
        <Navbar/>
        {showSuccess()}
        {showError()}
            
        </>
    )
}

export default Confirm
