import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		// state always sits here in parent class App
		// virtual DOM collects this objects
		this.state = {
			// robots starts empty. later fills up
			robots: [],
			// searchfield starts empty and then fills up
			searchfield: ''
		}
	}
	componentDidMount() {
		// fetch to get data from a website (makes a request)
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	// the arrow is needed so that the compiler
	// understands that "this" is the App
	onSearchChange = (event) => {
		// dont directly change values. do through method
		this.setState({ searchfield: event.target.value});
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredrobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		// when the robots have not loaded yet
		// put a loading sign (if length is 0 it means false)
		if (!robots.length) {
			return <h1>Loading</h1>
		}
		else {
			return (
				<div className = "tc">
					<h1 className="f1"> RoboFriends </h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							{/* if anything here fails the error boundary catches it */}
							<CardList robots = {filteredrobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
		// could make this if...else into ternary
	}
};

export default App;