import React from "react";
import {Nav , Navbar, Form, FormControl, Button, Container, Card, NavLink} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default function Chat (props) {

	
	const result = [];
const map = new Map();
for (const item of props.mes) {
    if(!map.has(item.msg_thread)){
        map.set(item.msg_thread, true);    // set any value to Map
        result.push({
            msg_thread: item.msg_thread,
            sendername: item.user_name_from,
            recivername:item.user_name_to,
            reciverid:item.user_id_to,
            senderid:item.user_id_from,
            msg:item.msg,
            msg_id:item.id
        });
    }
    
  
}
	var ii=props.yes.ii;
	
	if(props.yes.yes === 'yes')
	{
		document.getElementById(ii).Click()
	}
return(
<div>
{
	props.mes.length>0
	?
	
	result.map(sweet => {

		
			
    return (
    	sweet.sendername === props.name
    	?
    	<Card style={{backgroundColor:'#eeffe6' , margin:'.25rem'}}>
		<Card.Body><Link id={sweet.recivername} to={{pathname:"/convo",msg:sweet.msg_thread,n:sweet.recivername,nid:sweet.reciverid}} >{sweet.recivername} : {sweet.msg}</Link><br/>
		</Card.Body>
		</Card>
    	:
    	<Card style={{backgroundColor:'#eeffe6' , margin:'.25rem'}}>
		<Card.Body><Link id={sweet.sendername} to={{pathname:"/convo",msg:sweet.msg_thread,n:sweet.sendername,nid:sweet.senderid}} >{sweet.sendername} : {sweet.msg}</Link><br/>
		</Card.Body>
		</Card>)
})
	:
	
	<Card style={{backgroundColor:'#eeffe6' , margin:'.25rem'}}>
			
		
		<Card.Body><b>No messages</b></Card.Body>
		</Card>
	
}


</div>
)
}