import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Images from './Images';
import Button from './Button';
import Images1 from './Images1';
import Button1 from './Button1';
import About from './About';
import Profile from './Profile';

export default class Viewprofile1 extends Component {

	constructor(props)
  {

    super(props);
    this.state = {
    uploading: false,
    images: null,
    file:null,
    status:'picture',
    cv:null,
    experience:null,
    about:null,
    technology:[],
    st:'',
    user:{}
  }
   
  
  }
  
  

  onChange = e => {
    const files = e.target.files[0];
    this.setState({ uploading: true })

    const formData = new FormData()
formData.append('file', files,`profile-${this.props.id}`)
    


    fetch('https://glacial-hamlet-43337.herokuapp.com/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
     
       var body ={
    id: `profile-${this.props.id}`
  }
      axios('https://glacial-hamlet-43337.herokuapp.com/public', {
        method: "POST",
        data:body,
        responseType: "blob"
        //Force to receive data in a Blob Format
      })
        .then(response => {
          //Create a Blob from the PDF Stream
          const file = new Blob([response.data], {
            type: "image/jpg"
          });
         
          const fileURL = URL.createObjectURL(file);
          
         this.setState({file:fileURL,uploading:false})
        })
     // })
    })
  }

onChange1 = e => {
    const files = e.target.files[0];
    this.setState({ uploading: true })

    const formData = new FormData()
formData.append('file', files,`cv-${this.props.id}`)
    


    fetch('https://glacial-hamlet-43337.herokuapp.com/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
     
       var body ={
    id: `cv-${this.props.id}`
  }
      axios('https://glacial-hamlet-43337.herokuapp.com/public', {
        method: "POST",
        data:body,
        responseType: "blob"
        //Force to receive data in a Blob Format
      })
        .then(response => {
          //Create a Blob from the PDF Stream
          const file = new Blob([response.data], {
            type: "application/pdf"
          });
         
          const fileURL = URL.createObjectURL(file);
          
         this.setState({cv:fileURL,uploading:false})
        })
     // })
    })
  }


 onForward=()=>
 {
 	this.setState({
 		status:'cv'
 	})
 }
 onForward1=()=>
 {
 	this.setState({
 		status:'about'
 	})
 }
 onBackward1=()=>
 {
 	this.setState({
 		status:'picture'
 	})
 }

 handleChangeExperience=(event)=>{

this.setState({
	experience:event.target.value[0]
})
}


 handleChangeAbout=(event)=>{

this.setState({
	about:event.target.value
})

}

 handleChangeTechnology=(event)=>{

this.setState({
	technology:Array.from(event.target.selectedOptions, (item) => item.value)
})
}

 handleFinalSubmit=()=>
 {
 	
  fetch('https://glacial-hamlet-43337.herokuapp.com/complete', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        about: this.state.about,
        technology: this.state.technology,
        experience: this.state.experience,
        id:this.props.id
      })
    })
      .then(response => response.json())
      .then(user => {
        if(user === 'Complete')
       this.setState({
        status:'complete',
        st:'Congratulations your Profile is complete'
      })
       //   alert(user);
        
      }).catch(err => 
       console.log(err)
      )
 	
 }



  
  render() {
    const { uploading, cv,file ,status} = this.state
    
    const displaycontent = () => {
    	{
          	switch(status){
          	
          		case 'picture':
          		return content()
          		case 'cv':
          		return content1()
          		case 'about':
          		return content2()
          		case 'complete':
          		return content3()
          		default:
          		return content3()
          	}
          	
          }
      }
      const content=()=>{
      switch(true) {
      	case uploading:
          return <Spinner />
        case file != null:
          return <Images file={file} name={this.props.name} onForward={this.onForward}/>
        default:
          return <Button onChange={this.onChange} name={this.props.name} onForward={this.onForward} />
      }
  }

      const content1 = () => {
       switch(true) {
       	case uploading:
          return <Spinner />
        case cv != null:
          return <Images1 cv={cv} name={this.props.name} onForward1={this.onForward1}/>
        default:
          return <Button1 onChange1={this.onChange1} name={this.props.name} onForward1={this.onForward1} onBackward1={this.onBackward1} />
      }
      }

      const content2 = () => {
      return <About handleFinalSubmit={this.handleFinalSubmit} handleChangeExperience={this.handleChangeExperience} handleChangeTechnology={this.handleChangeTechnology} handleChangeAbout={this.handleChangeAbout}/>
    }

     const content3 = () => {
      return <div><h4>{this.state.st}</h4></div>
    }

    return (
      <div style={{marginTop:'5rem'}}>
        <div className='buttons'>
          {displaycontent()}
        </div>
      </div>
    )
  }
}

  


