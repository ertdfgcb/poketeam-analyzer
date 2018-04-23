/*
 * This is a image that can be clicked to select a pokemon
 *
 * state.pokemon: name of the selected pokemon
 *
 * props.pokemon: passed to state.pokemon
 */
import React, { Component, Button } from 'react';

export default class PokeSelector extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			pokemon: props.pokemon
		};
	}

	render() {
		return (<div className='control'>
			<button id='start-button' onClick={this.}>
				{this.state.pokemon}
			</button>
		</div>);
	}
}
