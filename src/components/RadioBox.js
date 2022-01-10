import React,{useState} from 'react'

const RadioBox = ({prices,handleFilters}) => {
    const [value,setValue] = useState('')

    const handleChange = e =>{
        handleFilters(e.target.value)
        setValue(e.target.value)
    }
    return (
        <>
        {prices.map((p,i)=>(
            <div className="form-check" key={i}>
            <input className="form-check-input" type="radio" name="flexRadio"
            onChange={handleChange}
             value={`${p._id}`} />
            <label className="form-check-label">
              {p.name}
            </label>
          </div>
        ))}
            
        </>
    )
}

export default RadioBox
