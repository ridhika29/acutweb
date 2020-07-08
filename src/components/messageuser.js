import React from "react";
import Chat from "./Chat";

class Messageuser extends React.Component{

	constructor(props)
	{
		super(props)
		this.state={
			mes:[],
			flag:false
		}
	}

	componentDidMount(){	
		 fetch('https://glacial-hamlet-43337.herokuapp.com/messageuser', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.id,
        
      })
    })
    .then(response => response.json())
    .then(json => {
    	json=json.reverse();
    this.setState({mes:json,flag:true });
   this.props.noti('no');
    })
    .catch(console.log)

   }

	render(){

		const { mes,flag }=this.state;
	
	

const display = () =>{
		if(flag)
			return <Chat mes={mes} name={this.props.name} yes={this.props.location }/>
		else
			return <h4>No message to display</h4>
	}

		return(
<div>
	{display()}
</div>

			)
	}


}

export default Messageuser;
