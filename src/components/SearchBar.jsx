// import React from 'react'

const SearchBar = ({ onSubmit }) => {

  const handleClick = () =>{
    onSubmit("hehe")
  }

  return (
    <div>
      <input type="text" name="" id="" />
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar
