import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import './SearchBar.css'


const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	const handleChange = (event) => {
		// console.log(event.target.value);
		setTerm(event.target.value);
	};

	return (
		<div id='form'>
			<form action='' onSubmit={handleFormSubmit}>
				<Input variant='filled' id='car' placeholder='Basic usage' size='lg'  onChange={handleChange} value={term} />
			</form>
		</div>
	);
};

export default SearchBar;
