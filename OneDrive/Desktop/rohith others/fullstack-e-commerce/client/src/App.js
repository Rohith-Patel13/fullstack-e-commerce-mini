import {Component} from "react"

import { v4 as uuidv4 } from 'uuid';

import Login from "./components/Login"
import Update from "./components/MyAccount"
import SignUp from "./components/Signup"
import Products from "./components/Products"

import shoe1 from "./shoe1.png"
import shoe2 from "./shoe2.png"
import shoe3 from "./shoe3.png"
import shoe4 from "./shoe4.png"

import './App.css';

const productDetailsList = [
  {
    id:uuidv4(),
    imageSrc: shoe1,
    Name:"Nike Air Max 270 to Chuck Taylors",
    altName:"shoe1",
    stock:336
  },
  {
    id:uuidv4(),
    imageSrc: shoe4,
    Name:"Nike Air Max 97",
    altName:"shoe4",
    stock:500
  },
  {
    id:uuidv4(),
    imageSrc: shoe2,
    Name:"Nike Air Force 1",
    altName:"shoe2",
    stock:300
  }, 
  {
    id:uuidv4(),
    imageSrc: shoe1,
    Name:"Nike Air Max 350",
    altName:"shoe1",
    stock:340
  },
  {
    id:uuidv4(),
    imageSrc: shoe3,
    Name:"Nike Air Max 95",
    altName:"shoe3",
    stock:400
  },  
  {
    id:uuidv4(),
    imageSrc: shoe4,
    Name:"Nike Air Max 97",
    altName:"shoe4",
    stock:500
  },
  {
    id:uuidv4(),
    imageSrc: shoe2,
    Name:"Nike Runner 8",
    altName:"shoe2",
    stock:378
  }, 
  {
    id:uuidv4(),
    imageSrc: shoe3,
    Name:"Nike Fast Max 95",
    altName:"shoe3",
    stock:480
  },  
  {
    id:uuidv4(),
    imageSrc: shoe4,
    Name:"Nike Air Max Runner 97",
    altName:"shoe4",
    stock:580
  }
]

class App extends Component{

  state = {loginTab:false,UpdateTab:false,SignUpTab:false,HomePage:true}

  loginClicked = ()=>{
    this.setState({HomePage:false,loginTab:true,UpdateTab:false,SignUpTab:false})
  }

  UpdateClicked=()=>{
    this.setState({HomePage:false,UpdateTab:true,loginTab:false,SignUpTab:false})
  }

  SignUpClicked=()=>{
    this.setState({HomePage:false,UpdateTab:false,loginTab:false,SignUpTab:true})
  }

  HomePageClicked=()=>{
    this.setState({HomePage:true,UpdateTab:false,loginTab:false,SignUpTab:false})
  }

  render(){
    const {HomePage,loginTab,UpdateTab,SignUpTab}=this.state
    const renderLogin = loginTab ? <Login/> : null
    const renderUpdate = UpdateTab ? <Update/> : null 
    const renderSignUp= SignUpTab? <SignUp/>:null
    

    const renderHomePage = ()=>{
      if(HomePage){
        return (
          <ul className="ulContainer">
          {
            productDetailsList.map((eachObject)=>(
              <Products eachObject={eachObject} key={eachObject.id}/>
            ))
          }
        </ul>
        )
      }
      return null
    }
    return (
      <div className="bg">
        <div className="headerContainer">
          <div className="headerLogoContainer">
            <img alt="shop now logo" className="headerLogo" src="https://s.tmimgcdn.com/scr/800x500/183700/modern-shopping-business-logo-template_183766-original.jpg"/>
            <h1>Shop Now</h1>
          </div>
          <nav className="navContainer">
            <h1 className="active-acnhor-link" onClick={this.HomePageClicked}> Home</h1>
            <h1 className="active-acnhor-link"> Shop</h1>
            <h1 className="active-acnhor-link" onClick={this.loginClicked}> Login</h1>
            <h1 className="active-acnhor-link"onClick={this.SignUpClicked}> SignUp</h1>
            <h1 className="active-acnhor-link" onClick={this.UpdateClicked}> My Account</h1>
          </nav>
        </div>
        {renderHomePage()}
        {renderLogin}
        {renderUpdate}
        {renderSignUp}
      </div>
    );
  }
}

export default App;
