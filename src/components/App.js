import React from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog'
import hogs from '../porkers_data';

export default class App extends React.Component {

  state = {
    filtered: false,
    filteredPigs: [],
    sortedPigs: []
  }

  filterPigs = () => {
    let filteredHogs = hogs.filter(hog => hog.greased === true)

    this.setState({
      filtered: !this.state.filtered,
      filteredPigs: filteredHogs
    })
  }

  sortPigs = (e) => {
    let sortedHogs
    let sortType = e.target.value

    if (sortType === "name") {
      sortedHogs = hogs.sort((a, b) => a.name > b.name ? 1 : -1)
    }
    if (sortType === "weight ascending") {
      sortedHogs = hogs.sort((a, b) => a.weight > b.weight ? 1 : -1)
    }
    if (sortType === "weight descending") {
      sortedHogs = hogs.sort((a, b) => a.weight < b.weight ? 1 : -1)
    }

    this.setState({
      sortedPigs: sortedHogs
    })
  }

  render() {
    return (
      <div className="App">
        < Nav filterPigs={this.filterPigs} sortPigs={this.sortPigs}/>

        <div className="ui grid container">
          {!this.state.filtered ? hogs.map(hog => <Hog key={hog.name} hog={hog} />) : this.state.filteredPigs.map(hog => <Hog key={hog.name} hog={hog}/>)}
        </div>
      </div>
    )
  }
}
