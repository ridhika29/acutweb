import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Images from './Images';
import Button from './Button';
import Images1 from './Images1';
import Button1 from './Button1';
import About from './About';
import Profile from './Profile';
import Profileedit from './profileedit';

export default class Viewprofile extends Component {

	constructor(props)
  {

    super(props);
    this.state = {
    uploading: false,
    images: null,
    file:null,
    status:'profile',
    cv:null,
    experience:null,
    about:null,
    technology:[],
    st:'',
    user:{},
    ejob:null,
    eexp:null,
    eabt:null,
    eint:null,
    espe:null,
    ephn:null,
    editprofile:''
  }
   
   console.log(this.props);

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
edit = () =>{
  this.setState({ status:'edit' })

}

save = () =>{

	if(this.state.eabt === null)
	{
		var abt=this.state.user.about
	}
	else{
		var abt=this.state.eabt
	}
	if(this.state.ejob === null){
		
		var job=this.state.user.job
		
	}
	else
		var job=this.state.ejob
	if(this.state.ephn === null){
		var phn=this.state.user.phone
	}
	else var phn=this.state.ephn
	if(this.state.eexp === null){
		var exp=this.state.user.experience
	}
	else var exp=this.state.eexp
	if(this.state.eint === null){
		var int=this.state.user.interested
	}
	else var int=this.state.eint
	if(this.state.espe === null){
		var spe=this.state.user.speciality
	}
	else var spe=this.state.espe
	
	 fetch('https://glacial-hamlet-43337.herokuapp.com/edituser', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        about: abt,
        experience:exp,
        phone:phn,
        interested:int,
        job:job,
        speciality:spe,
        id:this.props.id
      })
    })
      .then(response => response.json())
      .then(message =>  {
      	this.props.seteditprofile(message);
      	const location = {
  pathname: '/welcome',
  state: { user: this.state.user}
}

this.props.history.push(location)



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
onJob=(e)=>{ this.setState({ ejob:e.target.value })}
onSpe=(e)=>{ this.setState({ espe:e.target.value })}
onAbt=(e)=>{ this.setState({ eabt:e.target.value })}
onExp=(e)=>{ this.setState({ eexp:e.target.value })}
onInt=(e)=>{ this.setState({ eint:e.target.value })}
onPhn=(e)=>{ this.setState({ ephn:e.target.value })}

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
        status:'complete'});
       //   alert(user);
        
      }).catch(err => 
       console.log(err)
      )
 	
 }

 componentDidMount(){

 	fetch('https://glacial-hamlet-43337.herokuapp.com/profiledata', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id:this.props.id
      })
    })
      .then(response => response.json())
      .then(user => {
      this.setState({user:user})
        
      }).catch(err => 
       console.log(err)
      )

     
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
          
         this.setState({file:fileURL})
        })
     

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
          		case 'edit':
          		return content4()
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
      return <Profile user={this.state.user} file={file} edit={this.edit} editprofile={this.state.editprofile}/>
    }

    const content4 = () => {
      return <Profileedit user={this.state.user} file={file} onJob={this.onJob} onSpe={this.onSpe} onInt={this.onInt} onPhn={this.onPhn} onAbt={this.onAbt} ononChange={this.onChange} onExp={this.onExp} save={this.save} />
    }

    return (
      <div style={{marginTop:'1rem'}}>
        <div className='buttons'>
          {displaycontent()}
        </div>
      </div>
    )
}
}
  


