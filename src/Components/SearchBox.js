import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className = "pa2">
		<input 
			className = "pa3 ba b--green bg-lightest-blue"
			type="search" 
			placeholder = "Search Robots"
			// everytime the onChange event is triggered
			// call the searchChange function
			onChange = {searchChange}
		/>
		</div>
	);
}

export default SearchBox;