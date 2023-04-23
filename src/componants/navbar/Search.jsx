import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (
    <div  className='input_parent'>
<SearchIcon className='searchicon'/>
      <input type="text"className='searchinput' />
    </div>
  )
}

export default Search
