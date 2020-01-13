import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super (props);

		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		})
	}

	render() {
		{/* componentDidCatch helps to catch errors.
		  * Check if error has occurred.*/}
		if (this.state.hasError) {
			return <h1>Oops error here!</h1>;
		}
		{/*else render the children*/}
		return this.props.children;
	}
}

export default ErrorBoundary;