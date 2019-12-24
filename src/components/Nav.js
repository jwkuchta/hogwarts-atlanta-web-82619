import piggy from '../porco.png'
import React from 'react'

const Nav = ({filterPigs, sortPigs}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				Only Show Greased Pigs: <input onChange={filterPigs} type="checkbox"></input><br/>
				Sort By: <select onChange={sortPigs}>
					<option value="none"></option>
					<option value="name">Name (A-Z)</option>
					<option value="weight ascending">Weight (low - high)</option>
					<option value="weight descending">Weight (high-low)</option>
				</select>
			</div>
		</div>
	)
}

export default Nav
