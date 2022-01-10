import React,{useState,useEffect} from 'react'
import AdminSidebar from './AdminSidebar'
import {isAuthenticated} from '../auth'
import { allcategory , addproduct } from './apiIndex'

const AddProduct = () => {
    const {token} =isAuthenticated()
   
    const [values,setValues]=useState({
        product_name:'',
        product_price:'',
        countInStock:'',
        product_description:'',
        categories:[],
        category:'',
        product_image:'',
        error:'',
        success:false,
        formData:''
    })

    const {product_name,product_price,countInStock,product_description,categories,category,error,success,formData} = values
     //load categories and set form data
     const init=()=>{
         allcategory().then(data=>{
             if(data.error){
                 setValues({...values,error:data.error})
             }
             else{
                 setValues({...values,categories:data,formData:new FormData})
             }
         })
     }
     //to send form data
     useEffect(()=>{
         init()
     },[])

     const handleChange=name=>event=>{
         const value = name==='product_image' ? event.target.files[0] :event.target.value
         formData.set(name,value)
         setValues({...values,[name]:value})
     }

     const handleSubmit=e=>{
         e.preventDefault()
         setValues({...values, error:''})
         addproduct(token,formData)
         .then(data => {
             if(data.error){
                 setValues({...values,error:data.error})
             }
             else{
                 setValues({...values,product_name:'',product_price:'',product_description:'',countInStock:'',product_image:'',success:true,error:''})
             }
         })
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
       New product added
    </div>
    )
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar/>
                </div>
                <div className="col-md-6 mt-4">
                    <form className="shadow-lg p-3">
                        {showError()}
                        {showSuccess()}
                        <div className="mb-3">
                            <label htmlFor="productname">Product Name</label>
                            <input type="text" id="productname" className="form-control"
                            onChange={handleChange('product_name')} value={product_name}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productprice">Product Price</label>
                            <input type="number" id="productprice" className="form-control"
                            onChange={handleChange('product_price')} value={product_price}
                             />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock">Available Stock Number</label>
                            <input type="number" id="stock" className="form-control" 
                            onChange={handleChange('countInStock')} value={countInStock}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description">Product Description</label>
                           <textarea className="form-control" id="description"
                           onChange={handleChange('product_description')} value={product_description}
                           ></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="image">Product Image</label>
                            <input type="file" id="image" className="form-control" accept="image/*"
                            onChange={handleChange('product_image')} 
                             />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="category">Category</label>
                              <select className="form-control" onChange={handleChange('category')} >
                                  <option></option>
                                  {categories && categories.map((c,i)=>(
                                      <option key={i} value={c._id}>{c.category_name}</option>
                                  ))}
                              </select>
                        </div>
                       <div className="mb-3">
                           <button className="btn btn-primary" onClick={handleSubmit}>Add Product</button>
                       </div>

                    </form>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default AddProduct
