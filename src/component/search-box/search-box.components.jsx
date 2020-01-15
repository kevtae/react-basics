import React from 'react'

import './search-box.styles.css'

//functional component - if you dont need internal state or access to lifecycle method, use functional component
export const SearchBox = ({ placeholder, handleChange}) => (
    <input 
          type='search' 
          placeholder={placeholder}
          onChange={handleChange}/>
)

