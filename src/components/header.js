import React from 'react';
import {Nav , Navbar, Form, FormControl, Button, Container, Card, NavLink} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, HashRouter, Route, Link, withRouter, Redirect } from "react-router-dom";
import Viewlist from './viewlist';

class Header extends React.Component{
	constructor(props){

		super(props);

		console.log(this.props);
	}


render(){
	return(
<HashRouter>
<Card>
  <Card.Header>
    <Nav variant="" defaultActiveKey="#first">
      <Nav.Item>
        <Link to="/welcome" style={{color:'green'}}>Profile</Link>
      </Nav.Item>
      <Nav.Item>
        <Link  to="/viewlist" style={{color:'green'}}>Listing</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link" style={{color:'green'}}>
          Messages
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link" style={{color:'green'}}>Sign Out</Nav.Link>
      </Nav.Item>
    </Nav>
     </Card.Header>
      <div id="container">
      	 
            <Route path="/viewlist" component={Viewlist}/>

            
     
      </div>

</Card>
  </HashRouter>		
			
		




		)
}

}

export default Header;