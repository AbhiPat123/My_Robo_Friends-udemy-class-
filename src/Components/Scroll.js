import React from 'react';

// automatically every single component gets the props
// it has its children. Here Scroll's child is CardList element
const Scroll = (props) => {
	return(
		// double braces to add styles
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{ props.children }
		</div>
	);
};

export default Scroll;