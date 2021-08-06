/*-----------------------Add Impoertent File-------------------------------------*/

import {useState,useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Signup from './Signup'
import Login from './Login'
import Cakedetails from './Cakedetails'
import Search from './Search'
import Cart from './Cart'
import Checkout from './Checkout';
import{BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import axios from "axios"
import { connect } from "react-redux"
function App(props) {
  
  /* ----------------------------------------Check Login Token ----------------------------------------------------*/

  if(localStorage.token && !props.user){
    var token = localStorage.token
    console.log("mean user is already logged in") 
    axios({
      url:'https://apibyashu.herokuapp.com/api/getuserdetails',
      method:"get",
      headers:{
        authtoken:token
      }      
  }).then((response)=>{
      console.log("response from details api" , response.data)
          props.dispatch({
              type:"CHECK_USER",
              payload:response.data
          })         
  },(error)=>{
      console.log("error from detail api" , error)
  })
  }

  var [users,setUsers]=useState()
  var [loginstatus,setloginstatus]=useState(false)
  function LoginDone(data)
  {
    setUsers(data)
    setloginstatus(true)
  }

  /*-----------------------------------------------------------------------* --------------------------*/

  // NAvigation Section //
  
  
  return (
    <div className="App">
     <div className="container-fluid">
      <Router>   
        <Navbar user={users} loginstatus={loginstatus}> </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />*/
            <Route path="/login" exact render={props => <Login informlogin = {LoginDone} />} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/search" exact component={Search} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cakedetails/:cakeid" exact component={Cakedetails} />
            <Route path="/*">
              <Redirect to="/error"> exact component={Error}</Redirect>
            </Route>
          </Switch>  
      </Router> 
     </div>     
    </div>

  );
}
//-------------------------------------*-------------------------------------------------------------------//

// Check USER ALREADY EXIEST OR NOT //

export default connect(function(state,props){
  return{
    user:state?.user
  }
})(App)

//-----------------------------------------------**----------------------------------------------------------------//