import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faEnvelope,faLock }  from '@fortawesome/free-solid-svg-icons';
import logo from '../logoacut.png';
import Welcome from "./welcome";


export default class Login extends Component {

constructor(props) {
  super(props);
  this.state = {
    loader:'Sign In',
    valid:'',
    email: null,
    error:'',
    password: null,
    errors: {
     email: '',
      password: '',
    }
  };
}

handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  let errors = this.state.errors;

  switch (name) { 
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
  if(validateForm(this.state.errors)) {
    this.onSubmitSignIn();
  }else{
    this.setState(
        {valid:'InValid Form'})
  }
}

onSubmitSignIn = () => {
    this.setState({loader:'Signing In...'});
    fetch('https://glacial-hamlet-43337.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
            this.setState({loader:'success'});
            this.props.routeChange('true',user);
    const location = {
  pathname: '/welcome',
  state: { user: user }
}

this.props.history.push(location)

        }
        else
          {this.setState({error:user,loader:'Sign in'})}
      })
  }



    render() {
        return (
            <div className="auth-wrapper" style={
                {backgroundColor:'#A0CE4E'}}>
<div className="auth-inner">
            <form>

<p>{this.props.location.register}</p>
            <div className="form-group input-group" style={{'justifyContent':'center' }}>
            <img src={logo} className="img-thumbnail" style={{ height:'50px',border:'none'}}/>
              </div>
                <h3>Sign In</h3>

                
         
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

               <p className="font-italic text-danger">{this.state.valid}{this.state.errors['email']}{this.state.errors['password']}</p>

                <button type="submit" onClick={this.handleSubmit} className="btn  btn-outline-success btn-block" >{this.state.loader}</button>
                <p className="forgot-password text-right">
                    Not Registered yet? 
                    <Link to={"/sign-up"}> Sign up?</Link>
                </p>
                <p style={{color:'red', fontSize:'10px'}}>{this.state.error}</p>
            </form>
            </div>
            </div>
        );
    }
}