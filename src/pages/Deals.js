import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getFilteredProducts, allcategory } from '../components/uiApi'
import CheckBox from '../components/CheckBox'
import { prices } from '../components/fixedPrice'
import RadioBox from '../components/RadioBox'
import Card from '../components/Card'

const Deals = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  })
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(8)
  const [skip, setSkip] = useState(0)
  const [filteredResults, setFilteredResults] = useState([])
  const [size, setSize] = useState(0)


  const init = () => {
    allcategory().then(data => {
      if (data.error) {
        setError(data.error)
      }
      else {
        setCategories(data)
      }
    })
  }

  useEffect(() => {
    init()
    loadFilteredResults(skip, limit, myFilters.filters)
  }, [])

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters }
    newFilters.filters[filterBy] = filters
    if (filterBy === 'product_price') {
      let priceValues = handlePrice(filters)
      newFilters.filters[filterBy] = priceValues
    }
    loadFilteredResults(myFilters.filters)
    setMyFilters(newFilters)
  }
  const handlePrice = value => {
    const data = prices
    let array = []
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array
      }
    }
    return array
  }

  const loadFilteredResults = (newFilters) => {
    getFilteredProducts(skip, limit, newFilters)
      .then(data => {
        if (data.error) {
          setError(data.error)
        }
        else {
          setFilteredResults(data.product)
          setSize(data.size)
          setSkip(0)
        }
      })
  }

  const loadMore = ()=>{
    let toSkip = skip+limit
    getFilteredProducts(toSkip,limit,myFilters.filters)
    .then(data => {
      if(data.error){
        setError(data.error)
      }
      else{
        setFilteredResults([...filteredResults, ...data.product])
        setSize(data.size)
        setSkip(toSkip)
      }
    })
  }
  const loadMoreButton=()=>{
    return(
      size >=0 &&
      size>=limit && (
        <center>
          <button onClick={loadMore} className='btn btn-warning'>Load More Products</button>
        </center>
      )
    )
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h2>Deals and Promotions</h2>
        <p>Shop Today’s Deals, Lightning Deals, and limited-time discounts</p>
        <div className="row mt-5 mb-3">
          <div className="col-md-2 p-2 ms-3" style={{ backgroundColor: '#f5f5f5' }}>
            <h5>Categories</h5>
            <CheckBox categories={categories} handleFilters={filters => handleFilters(filters, 'category')} />
            <h5>Price range</h5>
            <RadioBox prices={prices} handleFilters={filters => handleFilters(filters, 'product_price')} />
            <h5>Deal Type</h5>
            <ul className="deals-type">
              <li className="list-unstyled"><a href="#" className="text-decoration-none">Deal of the Day</a></li>
              <li className="list-unstyled"><a href="#" className="text-decoration-none">Lightning Deals</a></li>
              <li className="list-unstyled"><a href="#" className="text-decoration-none">Saving & Sales</a></li>
              <li className="list-unstyled"><a href="#" className="text-decoration-none">Prime Early Access Deals</a></li>
            </ul>
          </div>
          <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-4 g-4">
                    {filteredResults.map((product,i)=>(
                         <Card key={i} item={product} />
                    ))}
                   
                </div>
                {loadMoreButton()}

          </div>

        </div>
      </div>



      <Footer />

    </>
  )
}

export default Deals
