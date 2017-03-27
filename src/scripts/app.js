import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

console.log('I kinda like the red background, actually.')

// kudos to Andi for the walkthrough!

let dangerZone = document.querySelector('#app-container')

const GrabPoliticiansProps = React.createClass({

	render: function(){
		return (
		<div>
			<SingleEvil smallCouncil={this.props.councilOfEvil.results}/>
		</div>
		)
	}
})

const SingleEvil = React.createClass({
	_createSingleEvilJSX: function (evilRA){
		let jsxRA = evilRA.map(function(evilObj){
			return (
				<div className='evil_councilor'>
					<h3> {evilObj.first_name} {evilObj.last_name} </h3>
					<h4> {evilObj.title} -- {evilObj.party} > {evilObj.state_name} </h4>
					<ul>
						<li> email: {evilObj.oc_email} </li>
						<li> webthing: {evilObj.website} </li>
						<li> BookFace: {evilObj.facebook_id} </li>
						<li> twittah: {evilObj.twitter_id} </li>
					</ul>
					<h5>Term End {evilObj.term_end}</h5>
				</div>
			)
		})
		return jsxRA
	},

	render: function(){
		let allTheEvil = this.props.smallCouncil;
		return (
			<div>
			{ this._createSingleEvilJSX(allTheEvil) }
			</div>
		)
	}
})

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
	ReactDOM.render (
		<GrabPoliticiansProps councilOfEvil={serverRes}/>, dangerZone
	);
})
