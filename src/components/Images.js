import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default props => 

    <div className='fadein'>
    
      <img src={props.file} alt='not found' style={{width:'300px' , height:'300px'}}/>
    
      <div>
    
   <a onClick={props.onForward}>
    <FontAwesomeIcon icon={faArrowRight} color='#3B5998' size='2x' style={{float:'right'}} />
   </a>
   </div>
    </div>
  