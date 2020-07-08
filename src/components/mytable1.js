import React , { useState , Component } from 'react';
import Header from './header';
import { MDBDataTableV5 } from 'mdbreact';
import { Modal, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from "react-router-dom";


export default props => {
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
    rows:props.table1,
  });
 
  
 const [checkbox1, setCheckbox1] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [prof , setProf]=React.useState('');
  const [data1 , setData1]=React.useState('');
   const [message, setMessage] = React.useState('');
    const [show2, setShow2] = React.useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handledelete = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
  const handleno = () =>{ handleClose1()}  
 const handleyeshere = () => { props.handleyes(prof.id)
                                handleClose1()
                                handleClose()
            
                              }
                               const handlemessage=()=> setShow2(true);
const handleClose2 = () => setShow2(false);
const handlesend =()=>{
props.handlemsg(message,prof.id,prof.name)
handleClose2()
handleClose()
}

  const showLogs2 = (e) => {
   
   handleShow();
   setProf(e);
   console.log(e);
  }
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
        checkbox={true}
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
      />
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
          <Button variant="danger" onClick={handledelete}>
            Delete Profile
          </Button>
        </Modal.Footer>
      </Modal>
    
     <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete user</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleyeshere} >
            Yes
          </Button>
          <Button variant="secondary" onClick={handleno}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
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
