import React , { useState , Component } from 'react';
import Header from './header';
import { MDBDataTableV5 } from 'mdbreact';
import { Modal, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from "react-router-dom";


export default function Viewlistuser(props) {

  const [datatable, setDatatable] = React.useState({
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
    rows: props.data,
  });
  const [checkbox1, setCheckbox1] = React.useState('');
  const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
 const [message, setMessage] = React.useState('');
const[sendmes,setSendmes]=React.useState('');
  const [prof , setProf]=React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handlemessage=()=> setShow2(true);
    
 
const handleClose2 = () => setShow2(false);
const handlesend =()=>{
let id2 = props.id;
let name2 = props.name;
let msg1 = message;
let id1 = prof.id;
let name1 = prof.name;
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
       setSendmes("Message Send");
    })
    .catch(console.log)
   
handleClose2()
handleClose()
}
  const showLogs2 = (e) => {
   
   handleShow();
   setProf(e);
   console.log(e);
  };

  const handlechange = (e) =>
  {
    setMessage(e.target.value);
  }

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
      />
      <h5>{sendmes}</h5>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name : {prof.name}</p>
          <p>email : {prof.email}</p>
          <p>Work as : {prof.job}</p>
          <p>Technology : {prof.speciality}</p>
          <p>Phone : {prof.phone}</p>
          <p>Interested in : {prof.interested}</p>
          <p>About : {prof.about}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handlemessage}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
     // <h1> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</h1>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={handlechange} type="text" className="form-control form-control-lg" placeholder="type your message here" size="lg"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlesend} >
            Send
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
