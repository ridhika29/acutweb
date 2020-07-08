import React, { Component } from "react";
import { Card} from 'react-bootstrap';


export default class Sendmessage extends Component {

	constructor(props) {
  super(props);
  this.state={
  	navigation:'',
  	
  }
  console.log(this.props);
 }

	render()
	{
		return(
			<Card style={{backgroundColor:'#eeffe6'}}>
			
		<Card.Header>Hello {this.props.name}</Card.Header>
		<h3>Send Announcement</h3>
		<button onClick={this.props.sendmessage}>Send</button>
		</Card>
		
		
			

			)

		}
			
			
	
}