import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.components'
import { SearchBox } from './component/search-box/search-box.components'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //array of object with name in it
      monsters: [],
      searchField:''
    }

   // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then( user => this.setState({ monsters: user }))
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  } 
  //no need to bind the function anymore

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        />

        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
