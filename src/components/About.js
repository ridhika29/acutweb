import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'
import {Form, FormControl, FormLabel,FormGroup,Button} from 'react-bootstrap';

export default (props) => 
  <div className='spinner fadein'>
    <Form style={{margin:'2rem'}}>
 
  <Form.Group>
    <Form.Label>Experience</Form.Label>
   	<Form.Control as="select" name="experience" id="experience" onChange={props.handleChangeExperience}>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Label>Technologies interested</Form.Label>
    <Form.Control as="select" multiple name="technology" id="technology"  onChange={props.handleChangeTechnology}>
      <option>React</option>
      <option>Python</option>
      <option>Node</option>
      <option>Machine Learning</option>
      <option>Javascript</option>
    </Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Label>Write something about Yourself</Form.Label>
    <Form.Control as="textarea" rows="3" name="about" id="about" onChange={props.handleChangeAbout} />
  </Form.Group>
    <Button variant="success" >
  <a onClick={props.handleFinalSubmit}>  Save & Finish</a>
  </Button>
</Form>
  </div>