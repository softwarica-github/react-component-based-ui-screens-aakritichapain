import React from 'react'
// import Button from '../Button/Button'
import { 
  Form, Button, Container, FormGroup, FormText
} from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
class Login extends React.Component{

constructor(){
  super()

  this.state = {

    email:'',
    password:''


  }
}

emailChangeHandler = (event) => {

  this.setState({email: event.target.value})


}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

fromSubmitHnadler = (e) => {
  e.preventDefault()


// use API call to post the data 
//fetch byt default JS
// Axios external package


  console.log(this.state) // this sate js object
  // 1st url 
  // 2nd data JS object
  // 3rd header JS object 
var headers = {

'Content-Type':'application/json'

}
  Axios.post('http://localhost:3023/login', this.state , headers)
  .then(function(response){

  })
  .catch(function(err){

  })

}

render(){
if(this.state.redirect){

return (
  <Redirect to='/login' />
  )
}


  return(
    <Container>
 <div style={{width:'800px'}}>
                <h1 className="text-center" style={{width: "100%"}}>Login Form</h1>
                <Form style = {{marginLeft: '200px',background: this.state.color}}>
                <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='text' name='email' id='email'
                            value={this.state.email} onChange={this.emailChangeHandler} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.passwordChangeHandler} />
                    </FormGroup>
                    <Button color='primary' onClick={this.handleSubmit}>Login</Button>
                   
                </Form>
                 <h4 className="text-center">Don't have an account?. <Link to='/'>Register here!</Link></h4>
                </div>
            </Container>
  )
}
}

export default Login