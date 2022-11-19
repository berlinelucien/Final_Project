import React from 'react'
import { MdSearch } from 'react-icons/md';
import "./Notes.css"

// search component 
/**
using the handleSearchNote as props and we are going to use this
as our onClick event function for searching 
(this actual function has been defined in App.js)
 */

function Search({handleSearch}){
    return(
        <div className='search'>
            {/** search icon within our search bar */}
            <MdSearch className='search-icon' size="1.4em"/>
            <input type="text" placeholder="Search for your notes..." 
            onChange={(event)=>handleSearch(event.target.value)}/>
        </div>
    )
}

export default Search