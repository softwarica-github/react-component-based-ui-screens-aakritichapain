import React from 'react'
import Img from 'react-image'

import { 
  Form, Button, Container, FormGroup, FormText
} from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios';
class Feedback extends React.Component {

constructor(){
  super()


  this.state = {
    yourname:'',
    youremail:'',
    yourfeedback:'',
    validationMessage:'',
     color: "#9ebd4b",
     //backgroundImage: `url(${BackImage})`,
    redirect:false

  }
}

yournameChangeHandler = (event) => {

this.setState({yourname: event.target.value})
  
}
youremailChangeHandler = (event) => {

if(event.target.value.length < 6){
  this.setState({validationMessage:'Email must contain @ and . '})
}

  this.setState({youremail: event.target.value})

}
yourfeedbackChangeHandler = (event) => {

this.setState({yourfeedback: event.target.value})
  
}

formSubmitHandler = (e) => {
  e.preventDefault()


// use API call to post the data 
//fetch byt default JS
// Axios external package

var headers = {

'Content-Type':'application/json'
// not 'x-form-urlencded '

}

var data = {

  yourname:this.state.yourname,
  youremail:this.state.youremail,
  yourfeedback:this.state.yourfeedback,

}

//mfetch method XMLHTTPREquest
  Axios.post('http://localhost:3023/feedback', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 201){

    this.setState({redirect:true})

    // redirect to login page 
  }



})
.catch( (err) =>  {

})



  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect){

return (
  <Redirect to='/login' />
  )

// toast message

}



  return(
 <Container>
 <div style={{width:'800px'}}>
                <h1 className="text-center" style={{width: "100%"}}>Contact Us Form</h1>
                <Form style = {{marginLeft: '200px',background: this.state.backgroundImage}}>
                    <FormGroup>
                    <Img src={'./Images/b.jpg'} decode={false} />
                        <Label for='yourname'>Your Name</Label>
                        <Input type='text' name='yourname' id='yourname'
                            value={this.state.fullname} onChange={this.yournameChangeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='youremail'>Your Email</Label>
                        <Input type='text' name='youremail' id='youremail'
                            value={this.state.youremail} onChange={this.youremailChangeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='yourfeedback'>Your Feedback</Label>
                        <Input name='yourfeedback' id='yourfeedback' type='textarea'
                            value={this.state.yourfeedback} onChange={this.yourfeedbackChangeHandler} />
                    </FormGroup>
                    <Button color='primary' onClick={this.handleSubmit}>Contact Us!</Button>
                   
                </Form>
                </div>
            </Container>
  )
}
}

export default Feedback