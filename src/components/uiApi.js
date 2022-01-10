import {API} from '../config'

//to fetch products by arrival date in desc and limit value
export const getProducts=(sortBy)=>{
    return fetch(`${API}/productlist?sortBy=${sortBy}&order=desc&limit=8`,{
        method:'GET'
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

//product details
export const productsDetails=(productId)=>{
    return fetch(`${API}/productdetails/${productId}`,{
        method:'GET'
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

//list related
export const listRelated=(productId)=>{
    return fetch(`${API}/product/related/${productId}`,{
        method:'GET'
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

//filter products by  category and price range
export const getFilteredProducts=(skip,limit,filters={})=>{
    let data ={limit,skip,filters}

    return fetch(`${API}/products/by/search`,{
        method:'POST',
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
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

