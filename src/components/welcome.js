import React, { Component } from "react";
import {Nav , Navbar, Form, FormControl, Button, Container, Card, NavLink} from 'react-bootstrap';
import Header from "./header";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from "react-router-dom";


export default class Welcome extends Component {

	constructor(props) {
  super(props);
  this.state={
  	navigation:'',
  	pr:false
  	
  }
}

tablereturn = () =>
{
	this.props.settable('orignal')
	 const location = {
  pathname: '/viewlist'
}
	this.props.history.push(location)
}
profilereturn = () =>
{
	this.props.seteditprofile('orignal')
	 const location = {
  pathname: '/viewprofile'
}
	this.props.history.push(location)
}


  

	render()
	{
		
		if(this.props.tableentry === 'deleted')
		{
			this.tablereturn()
		}
		if(this.props.editprofile === 'Updated')
		{
			this.profilereturn()
		}
		return(
			<Card style={{backgroundColor:'#eeffe6'}}>
			
		<Card.Header>Hello {this.props.name}</Card.Header>
		<Card.Body>Welcome to Acutweb.
		<br/> You need to Complete Your Profile and verify email. </Card.Body>
		{ this.props.profile === 'complete' ? <div></div> :
		<Link className="menu-item" to="/viewprofile1">
     <Button className="btn-danger" style={{float:'right'}}> Complete your Profile</Button>
      </Link>
  		}
  		
		</Card>
		
		
			

			)

		}
			
			
	
}