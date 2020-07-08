import React , { useState , Component } from 'react';
import Header from './header';
import Mytable from './mytable';
import Mytable1 from './mytable1';
import { MDBDataTableV5 } from 'mdbreact';
import { Modal, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from "react-router-dom";


class  Viewlist extends React.Component {
  constructor(props){
    super(props)
    this.state=
    {
      table:[],
      table1:[],
      status:'display',
      flag:false,
      idtodelete:'',
      datatable:{},
      sendmes:''
    }
  }

 

setdata=()=>{
  this.setState(
  {
    datatable:{
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Email',
        field: 'email',
        width: 270,
      },
      {
        label: 'Technology',
        field: 'speciality',
        width: 200,
      }
      
    ],
    rows:this.state.table,
  }
  })
}

handlemsg =(m,i,n)=>{
let id2 = this.props.id;
let name2 = this.props.name;
let msg1 = m;
let id1 = i;
let name1 = n;
fetch('https://glacial-hamlet-43337.herokuapp.com/sendmessage', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id1,
        msg:msg1,
        name:name1,
        send_id:id2,
        send_name:name2
      })
    })
      .then(response => response.json())
      .then(user => {
       this.setState({sendmes:"Message Sent Succesfully"})
    })
    .catch(console.log)
   

}
  handleyes=(id)=>{


let deleteid=id;
    this.setState(
    {
      idtodelete:id
    })
    fetch('https://glacial-hamlet-43337.herokuapp.com/delete', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: deleteid
      })
    })
      .then(response => response.json())
      .then(user => {
        this.props.settable('deleted');
       const location = {
  pathname: '/welcome'
}

this.props.history.push(location)
//this.componentDidMount()
    })
    .catch(console.log)
   
  }

   componentDidMount(){
    fetch('https://glacial-hamlet-43337.herokuapp.com/viewlist', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.id
      })
    })
    .then(response => response.json())
    .then(json => {
     
    this.setState({table:json,flag:true });
   
    })
    .catch(console.log)
  }
 
  render(){
     
    
    const displaycontent = () => {
      {
            switch(this.state.status){
            
              case 'display':
              return content()
              case 'again':
              return content1()
            
              default:
              return content()
            }
            
          }
      }
      const content=()=>{
     return this.state.flag ? <Mytable pid={this.props.id} table={this.state.table} handlemsg={this.handlemsg} handleyes={this.handleyes}/> : <div><p>Entry Deleted succesfully</p></div>
  }
   const content1=()=>{
     return this.state.flag ? <Mytable1 table1={this.state.table1} handlemsg={this.handlemsg} handleyes={this.handleyes}/> : <div></div>
  }

      
    return(
      <div>
        {displaycontent()}
        {this.state.sendmes}
      </div>
      )
  }

}

export default Viewlist;
