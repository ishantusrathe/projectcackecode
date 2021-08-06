
import {useState,useEffect} from "react"
import { Link ,useHistory} from "react-router-dom"
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Navbar(props) {
  const history = useHistory();

  var onlinestaus=0;
  var [query,setQuery]=useState()
  let getQuery=function(event)
  {
    setQuery(event.target.value)
  }

   let logout=function(event){
        event.preventDefault()
        props.dispatch({
            type:"LOGOUT"
        })
        
    }

 //------------------------------------------Navigation Section(Menu Section)-----------------------------------------------

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <Link to="/"> <a class="navbar-brand">My CakeShop</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       <Link to="/"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
         <Link to="/cart"><button className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart} /></button></Link>
      </li>
    </ul>

    {props.children}   Hello {props.user} 
    <div class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={getQuery}/>
      <Link to={`/search?q=${query}`}><button className="btn btn-outline-success">Search</button></Link>
    </div>
    <div>
       {
        
         props.loginstatus ? 

         <button className="btn btn-danger" onClick={logout}>Logout</button>  
         :  <Link to="/login"><button className="btn btn-success">Login</button></Link>
        }
    </div>
  </div>
</nav>
  );
}


//---------------------CHcek user LOGIN PROPERY---------------------------//

export default connect(function(state,props){
    console.log("............state initially" , state)
    return {
        user:state ?.user?.name,
        loginstatus:state?.isloggedin
    }
})(Navbar)
