/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {

  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value)
  }

  return (
    <div>
      <form action='' onSubmit={handleFormSubmit}>
        <input type='text' name='' id='' value={term} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default SearchBar;