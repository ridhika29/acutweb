import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft , faArrowRight,faFile } from '@fortawesome/free-solid-svg-icons'

export default props => 

    <div className='fadein'>
    
    <label htmlFor='single'>
        <FontAwesomeIcon icon={faFile} color='#3B5998' size='10x' />
      </label>
      <h3>CV Uploaded successfully</h3>
      <div>
      <a onClick={props.onBackward1}>
    <FontAwesomeIcon icon={faArrowLeft} color='#3B5998' size='2x' style={{float:'left'}} />
  </a> <a onClick={props.onForward1}>
    <FontAwesomeIcon icon={faArrowRight} color='#3B5998' size='2x' style={{float:'right'}} />
   </a>
   </div>

    </div>
  