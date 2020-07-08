import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faImage, faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default props => 
  <div className='buttons fadein'>
  
    <div className='button' style=
    {{textAlign:'center'}}>
      <label htmlFor='single'>
        <FontAwesomeIcon icon={faUser} color='#3B5998' size='10x' />
      </label>
      <input type='file' id='single' onChange={props.onChange} style=
      {{marginLeft:'5rem'}} /> 
    </div>
    <div  style={{margin:'1.5rem'}}>
    <FontAwesomeIcon icon={faArrowLeft} color='#3B5998' size='2x' style={{float:'left'}} />
   <a onClick={props.onForward}>
    <FontAwesomeIcon icon={faArrowRight} color='#3B5998' size='2x' style={{float:'right'}} />
   </a>
    </div>
  </div>