import {useState,useEffect} from "react"
import axios from "axios"
import { Link ,withRouter} from "react-router-dom"

import { connect } from "react-redux";

//---------------------------LOgin funcinality -----------------------------

function Login(props)
{

    useEffect(()=>{
       
    },[])
	
    var [errorMessage,setErrorMessage]=useState()  // State Define for Handling error

    var [user,setUser]=useState({})                // State Define for Handling User
    var [formerrors,setFormerrors]=useState({})


    let getEmail=(event)=>                      //-----ChCEK MAIL
    {
        setUser({
            ...user,
            email:event.target.value,
        })
        
    	user.email = event.target.value
    }
    let getPassword=(event)=>                        //--------check Password
    {
        setUser({
            
            ...user,
            password:event.target.value,
        })
        
    	user.password = event.target.value
    }

//--------------------------------------Validation Funcinality -------------------------

   var validate=function(elements)
   {
      var errors={}
      if(!elements.email.value)
      {
        errors.email="Email is Required"
      }
      if(!elements.password.value)
      {
        errors.password="Password is Required"
      }
      var errorkeys=Object.keys(errors)
      if(errorkeys.length>0)
        return errors
      else
        return false
   }

    let login = ()=>{

        var form=document.getElementById('loginform')
          console.log("form element in this",form.elements,form.controls)
        var errors=validate(form.elements)
        if(errors)
        {
            setFormerrors(errors)
        }else{
            setFormerrors({})
            alert("Form Validate successfully")
            let apiurl="https://apibyashu.herokuapp.com/api/login"  //.........................Login api
           axios({
                url:apiurl,                                        
                method:"post",
                data:user
           }).then((response)=>{
              console.log("Response from Login api",response.data) //----------------------- Successfully lOGIN 
              if(response.data.token)                              //-----------------------cHECK tOKEN vALUE
              {
                localStorage.token=response.data.token
                localStorage.email=response.data.email
                setErrorMessage("Login Successfully")
                props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                }) 
                // props.informlogin("Neeraj Kushwah")
                props.history.push("/")
              }else                                                //------------------Error section---------
              {
                setErrorMessage("Invalid Login")
              }
           },(error)=>{
              console.log("Error from Login api",error)  
           })
        }       
    }
	
		return(
          <div style={{width:"50%" , margin:"auto"}} className="col-md-6">
              <h2> Login Section </h2>
            <form id="loginform">  
                <div className="form-group">
                    <label>Email</label>
                <input type="email" name="email" class="form-control" onChange={getEmail}></input>
                   { user && <label>{user.email}</label> }
                </div>
              {formerrors?.email && <div className="formerrors">{formerrors.email}</div>}  
                <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" onChange={getPassword}></input>
                   {user && <label>{user.password}</label> }
                </div>
              {formerrors?.password && <div className="formerrors">{formerrors.password}</div>}   
                <div style={{color:"red"}}>
                    {errorMessage}
                </div>
                <div style={{ float:"left"}}>
                  <Link to="/signup">New User! Click Here</Link>
                </div>
                <div style={{ float:"right"}}>
                  <Link to="/forgot">Forgot Password</Link>
                </div>
            </form>
              <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
		)
	
}

//---------If user already Login-----------//

Login = withRouter(Login)
  export default connect(function(state,prop){  
})(Login)