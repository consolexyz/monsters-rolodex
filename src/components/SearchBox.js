import React from 'react';
import './search-box.css';

const SearchBox =(props) => 

   (
        <div>
            <input type='search' 
            placeholder='Search monsters' 
            className='search'
            onChange={props.handleChange}
            />
        </div>
    )

export default SearchBox
