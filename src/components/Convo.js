import React, { Component } from "react";
import {Nav , Navbar,Form, FormControl, InputGroup,Button, Container, Card, NavLink} from 'react-bootstrap';
import Header from "./header";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from "react-router-dom";
import './convo.css';



export default class Convo extends Component {

	constructor(props) {
  super(props);
  this.state={
  
  	conver:[],
  	name:'',
  	mes:''
  }
}

handlechange=(e)=>{
	this.setState({mes:e.target.value})
}

send=()=>
{
	
fetch('https://glacial-hamlet-43337.herokuapp.com/sendmessage', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.location.nid,
        msg:this.state.mes,
        name:this.props.location.n,
        send_id:this.props.id,
        send_name:this.props.name,
      })
    })
      .then(response => response.json())
      .then(user => {
      	document.getElementById('input').value='';
  this.componentDidMount()
    })
    .catch(console.log)
   
	
}
componentDidMount(){

fetch('https://glacial-hamlet-43337.herokuapp.com/convo', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
       msg:this.props.location.msg
      })
    })
      .then(response => response.json())
      .then(user => {
       this.setState({conver:user,name:this.props.name})
    })
    .catch(console.log)
    
}

  

	render()
	{
		const displaychat=()=>{
			return(
			this.state.conver.map(chat=>{

			return(
		chat.user_name_to === this.state.name
			?
		<div className="clearfix"><blockquote className="you pull-left">{chat.msg}</blockquote></div>
		:
		<div className="clearfix"><blockquote className="me pull-right">{chat.msg}</blockquote></div>

  		
		
		)


		})
			)
		}

	 
		return(

		
			<div className="col-md-4 p-2">
    	    	<Card border="default" style={{height:'calc(100vh - 100px)'}}>
              		<Card.Header>{this.props.location.n}</Card.Header>
              		<Card.Body style={{overflowX: 'scroll' }}>
                	{displaychat()}
              		</Card.Body>
              		<Card.Footer>
              		<InputGroup className="mb-3"  onChange={this.handlechange}>
    <FormControl id="input"
      placeholder="Send Message"
      aria-label="Send Message"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-success" onClick={this.send}>Send</Button>
    </InputGroup.Append>
  </InputGroup>
              		
              		</Card.Footer>
            	</Card>
        	</div>
		
		
		
		)
			

			

		}
			
			
	
}