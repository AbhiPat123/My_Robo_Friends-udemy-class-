import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {

	// error check. commented for now. the error is set to true here
	// if (true) {
	// 	throw new Error('Nooo!');
	// }

	const cardsArray = robots.map((user, i) => {
		return (
			<Card name={robots[i].name} email={robots[i].email} id={robots[i].id} key={i}/>
		);
	});

	return (
		<div>
			{
				// can directly add the robots.map line here too
				// in that case cardsArray will not be needed
				cardsArray
			}
		</div>
	);
}

export default CardList;