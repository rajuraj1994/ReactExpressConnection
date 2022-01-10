import { API } from "../../config";

// to add category
export const addcategory=(token,category)=>{
    return fetch(`${API}/postcategory`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//to fetch all category

export const allcategory=()=>{
    return fetch(`${API}/categorylist`,{
        method:'GET'    
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//add product
export const addproduct=(token,product)=>{
    return fetch(`${API}/postproduct`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//product list
export const allproducts=()=>{
    return fetch(`${API}/productlist`,{
        method:'GET'    
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}