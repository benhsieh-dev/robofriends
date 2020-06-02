import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll'; 
import ErrorBoundry from '../components/ErrorBoundry'; 

class App extends Component  {
    constructor(props) {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange= (event) => {
        this.setState({ searchField: event.target.value})
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then(users => this.setState({ robots: users }))
    }
    
    render() {
        const { robots, searchField } = this.state; 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
         })

         return !robots.length ? <h1>Loading</h1> : 
          (<div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
          </div>);
    }
}

export default App; 