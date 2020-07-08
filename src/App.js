import React from 'react';
import './App.css';
import logo from './logoacut.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
import { slide as Menu } from "react-burger-menu";
import Login from "./components/login";
import SignUp from "./components/signup";
import Welcome from "./components/welcome";
import Viewlist from "./components/viewlist";
import Viewlistuser from "./components/viewlistuser";
import Convo from "./components/Convo";
import Viewprofile from "./components/viewprofile";
import Viewprofile1 from "./components/viewprofile1";
import Sendmessage from "./components/sendmessage";
import Message from "./components/message";
import Messageuser from "./components/messageuser";
import Header from "./components/header";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isloggedin:'false',
        data:[],
        data1:[],
        updateddata:false,
        name:'',
        id:'',
        isOpen: false,
        profile:'',
        editprofile:'',
        tableentry:'',
        red:''
      
    }

}
handleToggle = () => {
  
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
routeChange=(is,data)=>{
  this.setState({isloggedin:is});
  this.setState({
    
      name:data.name,
      id:data.user_id,
      profile:data.profile,
      red:data.notifications
    
  });
 }
 signout=()=>
 {
  this.setState({isloggedin:'false'})
 }
componentDidMount(){
 
    
       fetch('https://glacial-hamlet-43337.herokuapp.com/viewlist', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.id
      })
    })
    .then(response => response.json())
    .then(json => {
     
    this.setState({data:json });
   
    })
    .catch(console.log)
  
 
 
}

seteditprofile=(m)=>{
  this.setState({editprofile:m})
}
settable=(m)=>{
  this.setState({tableentry:m})
}
noti=(i)=>{
  this.setState({red:i})
}

 

render(){

  const { isOpen } = this.state;
  return (

<Router>
{ this.state.isloggedin === 'true'
    ?
    <div style={{height:'80px'}} className="bg-white">
    <img src={logo} style={{float:'right',height:'60px'}} className="pr-2"/>
       <Menu>
      <Link className="menu-item" to="/welcome">
      Home
      </Link>

      <Link className="menu-item" to="/viewlist">
      List
      </Link>
      <Link className="menu-item" to="/viewprofile">
      View Profile
      </Link>
      <Link className="menu-item" to="/message">
      Messages {this.state.red === 'yes' ? <Badge variant='danger' style={{float:'right'}}>New</Badge> : <div></div>}
      </Link>

      <a  href="/sign-in" className="menu-item"  onClick={this.signout}>
      Sign Out
      </a>
    </Menu>
    </div>
      :
      <div></div>
  }
     
       
      <div id="containernew" style={{height:'100%',backgroundColor:'white'}}>
          <Switch>
            <Route exact path='/' render={(props) => (
    <Login {...props} routeChange={this.routeChange} />
  )} />
             <Route exact path='/convo' render={(props) => (
    <Convo {...props} name={this.state.name} id={this.state.id} />
  )} />
            <Route path="/sign-in"  render={(props) => (
    <Login {...props} routeChange={this.routeChange} />
  )} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/welcome" render={(props) => (
    <Welcome {...props} settable={this.settable} id={this.state.id} seteditprofile={this.seteditprofile} editprofile={this.state.editprofile} tableentry={this.state.tableentry} name={this.state.name} profile={this.state.profile} />
  )} />
           
            <Route path="/viewlist" render={(props) => (
    <Viewlist {...props} name={this.state.name} id={this.state.id} settable={this.settable}/>
    )} />
    
            

          <Route path="/viewprofile" render={(props) => (
    <Viewprofile {...props} name={this.state.name} id={this.state.id} seteditprofile={this.seteditprofile}/>
    )} />
             <Route path="/viewprofile1" render={(props) => (
    <Viewprofile1 {...props} name={this.state.name} id={this.state.id}/>
    )} />
             
              <Route path="/message" render={(props) => (
    <Messageuser {...props} name={this.state.name} noti={this.noti} id={this.state.id} />
    )} />
            }

          </Switch>
            

            
     
      </div>

  </Router> 


  
  
  );
}
}
export default App;
