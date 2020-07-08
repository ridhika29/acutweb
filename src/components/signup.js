import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faUser,faEnvelope,faLock,faBuilding,faPhone }  from '@fortawesome/free-solid-svg-icons';
import logo from '../logoacut.png';

export default class SignUp extends Component {

    constructor(props) {
  super(props);
  this.state = {
    loader:'Sign Up',
    register:'',
    valid:'',
    email: null,
    phone: null,
    name: null,
    role:'',
    technology:'',
    password: null,
    errors: {
     email: '',
      password: '',
      name:'',
      phone:'',
      role:'',
      technology:''
    }
  };
}

handleChange = (event) => {
  event.preventDefault();
  this.setState({valid:''});
  const { name, value } = event.target;
  const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  let errors = this.state.errors;
  const phoneno = /^\d{10}$/;
  
  switch (name) { 
    case 'name': 
      errors.name = 
        value.length < 5
          ? 'Full Name must be 5 characters long!'
          : '';
      break;
      case 'phone': 
      errors.phone = 
        value.length === 10 && phoneno.test(value)
          ? ''
          : 'Phone Number must be 10 Digits long!';
      break;
    case 'email': 
      errors.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
      break;
    case 'password': 
      errors.password = 
        value.length < 5
          ? 'Password must be 8 characters long!'
          : '';
      break;
      case 'role': 
      errors.role = 
        value === "notSelected"
          ? 'Please choose a role!'
          : '';
      break;
      case 'technology': 
      errors.technology = 
        value === "notSelected"
          ? 'Please choose technology!'
          : '';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value})
}

handleSubmit = (event) => {
  event.preventDefault();
  const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}




if(this.state.role === '')
{
    this.setState(
        {valid:'InValid Form'})
}
else if(this.state.technology === '')
{
    this.setState(
        {valid:'InValid Form'})
}
else if(validateForm(this.state.errors)){
   this.onSubmitSignIn();
  }
else{
    this.setState(
        {valid:'InValid Form'})
  }
}

onSubmitSignIn = () => {
      this.setState({loader:'Registering...'});
      
   fetch('https://glacial-hamlet-43337.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        role: this.state.role,
        technology: this.state.technology,
        phone: this.state.phone
      })
    })
      .then(response => response.json())
      .then(user => {
        if(user === 'Registered')
        {
          this.setState({register:"Registered Successfully"});
        document.getElementById('hello').click();
       //   alert(user);
     }
        
      }).catch(err => 
       console.log(err)
      )
      
  }


    render() {
        return (
                       <div className="auth-wrapper" style={
                {backgroundColor:'#A0CE4E'}}>

            <div className="auth-inner">
            <form>
            <div className="form-group input-group" style={{'justifyContent':'center' }}>
            <img src={logo} className="img-thumbnail" style={{ height:'50px',border:'none'}}/>
              </div>
                <h3>Sign Up</h3>

                <div className="form-group input-group">
        <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /> </span>
         </div>
        <input name="name" id="name" className="form-control" 
        onChange={this.handleChange} placeholder="Full name" type="text">
    </input></div>
         <div className="form-group input-group">
        <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope} /> </span>
         </div>
        <input name="email" id="email" 
        onChange={this.handleChange} className="form-control" placeholder="Email address" type="email">
   </input> </div>
   <div className="form-group input-group">
        <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
        </div>
        <input className="form-control" name="password"
        onChange={this.handleChange} id="password" placeholder="Create password" type="password">
   </input> </div> 
   <div className="form-group input-group">
        <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faPhone} /> </span>
        </div>
        <input name="phone" id="phone" 
        onChange={this.handleChange} className="form-control" placeholder="Phone number" type="text">
    </input>
    </div>

            <div className="form-group input-group">
        <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faBuilding} /></span>
        </div>
        <select className="form-control" id="role" name="role" onChange={this.handleChange}>
            <option value="notSelected">Select Role:</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Accounting">Accounting</option>
            <option value="Developer">Developer</option>
        </select>
    </div>
    <div className="form-group input-group">
        <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faBuilding} /></span>
        </div>
        <select className="form-control" id="technology" name="technology" onChange={this.handleChange}>
            <option value="notSelected"> Select Technology</option>
            <option value="PHP">PHP</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="Python">Python</option>
        </select>
    </div>
<p className="font-italic text-danger">{this.state.valid}{this.state.errors['role']}{this.state.errors['technology']}{this.state.errors['phone']}{this.state.errors['email']}{this.state.errors['name']}{this.state.errors['password']}</p>
                <button type="submit" onClick={this.handleSubmit}  className="btn btn-outline-success  btn-block">{this.state.loader}</button>
                <p className="forgot-password text-right">
                    Already registered 
                    <Link id="hello" to={{pathname:"/sign-in",register:this.state.register}}> Sign in?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}