import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Search = () => {
  return (
     
   <Link to='/search'> 
   <div  className='input_parent'>
<SearchIcon className='searchicon'/>
      <div className='searchinput' />
    </div></Link> 
  )
}

export default Search
