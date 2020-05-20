import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchFeild: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchFeild: event.target.value })
	}

	render() {
		const { robots, searchFeild } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchFeild.toLowerCase());
		});
		if(!robots.length) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1>RoboFriends</h1>
					<Searchbox searchChange = {this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={ filteredRobots } />
						</ErrorBoundary>
					</Scroll>
					
				</div>
			);
		}
		
	}
}

export default App;
