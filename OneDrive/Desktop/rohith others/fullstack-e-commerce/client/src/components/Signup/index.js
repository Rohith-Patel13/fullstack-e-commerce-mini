import {Component} from "react"

import "./index.css";

class SignUp extends Component {

  state = {nameVal:"",emailVal:"",passwordVal:""}

  nameTyping=(event)=>{
    this.setState({nameVal:event.target.value})
  }

  emailTyping=(event)=>{
    this.setState({emailVal:event.target.value})
  }

  passwordTyping=(event)=>{
    this.setState({passwordVal:event.target.value})
  }

  signUpClicked=()=>{
    const baseUrl="http://localhost:8385/";
    const requestConfiguration = {
      method: "POST",
    }

    fetch(baseUrl,requestConfiguration);
  }

  render(){

    const {nameVal,emailVal,passwordVal}=this.state

    return(

      <form className="formContainer">
    
        <h1>Sign Up</h1>
    
        <label htmlFor="nameIdNumSignup">Name</label>
        <input value={nameVal} type="text" id="nameIdNumSignup" onChange={this.nameTyping} />
    
        <label htmlFor="emailIdNumSignup">Email</label>
        <input value={emailVal} type="email" id="emailIdNumSignup" onChange={this.emailTyping} />
    
        <label htmlFor="passwordIdNumNewSignup">Password</label>
        <input value={passwordVal} type="password" id="passwordIdNumNewSignup" onChange={this.passwordTyping} />
        
        <button type="button" className="Btn" onClick={this.signUpClicked}>Sign Up</button>

      </form>

    );

  }

}

export default SignUp;
