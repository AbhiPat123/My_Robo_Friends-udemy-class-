import React from 'react';

const Card = ({ name, email, id}) => {
	return (
		// this part is JSX below and need to import React
		// the program understands JSX because of React
		<div className=' tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow5'>
			<img src={`https://robohash.org/${id}`} alt="logo"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;