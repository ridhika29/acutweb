import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhone,faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Form } from "react-bootstrap";


export default (props) => 
<div className="row">
<div className="col-lg-6">
        <div className="card m-b-30">
            <div className="card-body py-5">
                <div className="row">
                <h5 style={{color:'green'}}>{props.editprofile}</h5>
                    <div className="col-lg-3 text-center">
                      {props.file === null ? <h5 style={{color:'red'}}>Please Upload <br/>Your Profile Picture!!!</h5>: <img src={props.file} className="img-fluid mb-3" alt="user" style={{borderRadius:'50%'}}/>
 }                  </div>
                    <div className="col-lg-9">
                        <h4>{props.user.name}</h4>
                        <p>{props.user.email}</p>
                        
                        <div className="table-responsive">
                            <table className="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row" className="p-1">Category :</th>
                                        <td className="p-1">{props.user.job} as {props.user.speciality}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="p-1">Phone :</th>
                                        <td className="p-1">{props.user.phone}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="p-1">Interested in :</th>
                                        <td className="p-1">{props.user.interested}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="p-1">Experience :</th>
                                        <td className="p-1">{props.user.experience} Years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="p-1">About :</th>
                                        <td className="p-1">{props.user.about}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Button onClick={props.edit}>Edit Profile</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
    
              
            
          
  