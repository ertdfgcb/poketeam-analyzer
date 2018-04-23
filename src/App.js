import React, { Component, Button } from 'react';
import Popup from "reactjs-popup";
// add this when image store is added: import PokeSelector from './PokeSelector';
import './App.css';
import Db from './db';

class PokeTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: props.filter == undefined ? "" : props.filter
		};
	}

	onClick(id) {
		return (e) => {
			this.props.onSelect(id);
		}
	}

	render() {
		const listItems = Db.pokemon.map((mon) => {
			if(mon.name.includes(this.state.filter)) {
				return (
					<li key={mon.id}>
						<button onClick={this.onClick(mon)}>
							{mon.name}
						</button>
					</li>
				);
			}
		});
		return (
			<div>
				<ul>
					{listItems}
				</ul>
			</div>
		);
	}
}

function PokeSearch(props) {
	return (
		<form>
			<input
				type="text"
				placeholder="Search Pokemon"
				value={props.filterText}
				onChange={props.onChange}
			/>
		</form>
	);
}

class PokeDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ""
		};
	}

	render() {
		return (
			<div>
				<PokeSearch onChange={(e) => {
					this.setState({search: e.target.value});
				}} />
				<PokeTable onSelect={this.props.onSelect} filter={this.state.search}/>
			</div>
			);
	}
}


class App extends Component {
	constructor(props) {
		super(props);
		this.state= {
			poke1: "None"
		};
	}
	
  render() {
    return (
			<Popup
				modal
				trigger={<button>{this.state.poke1}</button>}
				position="right center" >
				{
					close => (
						<PokeDialog onSelect={(mon) => {
							this.setState({poke1: mon.name});
							close();
						}} />
					)
				}
			</Popup>
    );
  }
}

export default App;
