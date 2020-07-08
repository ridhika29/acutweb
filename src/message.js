import React from "react";
import Chat from "./components/Chat";

class Message extends React.Component{

	constructor(props)
	{
		super(props)
		this.state={
			mes:[],
			flag:false
		}
	}

	componentDidMount(){

		 fetch('http://localhost:3005/message')
    .then(response => response.json())
    .then(json => {
     
    this.setState({mes:json,flag:true });
   
    })
    .catch(console.log)
	}

	render(){

		const (mes,flag)=this.state;

		if(flag)
			return <Chat mes={mes}/>
		else
			return <h4>No message to display</h4>

		return(
<div>
	{display()}
</div>

			)
	}


}

export default Message;
