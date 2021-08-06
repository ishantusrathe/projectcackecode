import React from 'react'
import axios from 'axios'
import {useEffect , useState} from "react";
import {Link,useParams,withRouter} from "react-router-dom";
import { connect } from "react-redux";

var img="carousel_card.jpeg";

function Cart(props) {

    let [cartdetail,setCartetail]=useState([])
    var token = localStorage.token
    useEffect(()=>{
        let allcartdetailapi="https://apibyashu.herokuapp.com/api/cakecart"
        axios({
        url:allcartdetailapi,
        method:"post",
        headers:{
            authtoken:token
          } 
    }).then((response)=>{
        console.log("response from  cart details  api" ,response.data)
        setCartetail(response.data.data)
    },(error)=>{
        console.log("error from cart details api",error)
    })
    },[])

    function removeitem(cakeid){
     
        var cartremove={
            cakeid:cakeid,      
        }
        console.log(" cake details" ,cartremove)
        var token = localStorage.token
        let cartapi="https://apibyashu.herokuapp.com/api/removecakefromcart"
        axios({
            url:cartapi,
            method:"post",
            data:cartremove,
            headers:{
                authtoken:token
              } 
        }).then((response)=>{
            console.log("response from remove item from cart api" , response.data)
            //alert(response.data)
            setCartetail(response.data.data)
            window.location.reload();
            
        },(error)=>{
            console.log("error from remove item from cart api" , error)
        })
    }

    function getcartdata()
    {
        props.dispatch({
              type:"SETCARTDATA",
              payload:cartdetail
        }) 
        props.history.push("/checkout")
    }

  return (
    <div class="col-sm-12 col-md-10 col-md-offset-1">
     { props.loginstatus?

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th class="text-center">Price</th>
            <th class="text-center">Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
    { cartdetail?.length > 0 && cartdetail.map((each, index)=>{
        return (
          <tr>
            <td class="col-sm-8 col-md-6">
              <div class="media">
                <a class="thumbnail pull-left" href="#"> <img class="media-object" src={each.image} style={{ width: "72px", height: "72px" }}/> </a>
              <div class="media-body">
                <h5 class="media-heading"> by <a href="#">{each.name}</a></h5>
                <h5 class="media-heading"> Weight : <a href="#">{each.weight} kg</a></h5>
                <span>Status: </span><span class="text-warning"><strong>In Stock</strong></span>
              </div>
              </div>
            </td>
            <td class="col-sm-1 col-md-1" style={{ textalign: "center" }}>
              <input type="email" class="form-control" id="quantity" value={each.quantity}/>
            </td>
            <td class="col-sm-1 col-md-1 text-center"><strong>{each.price}</strong></td>
            <td class="col-sm-1 col-md-1 text-center"><strong>{each.pricey}</strong></td>
            <td class="col-sm-1 col-md-1">
              <button type="button" class="btn btn-danger" onClick={() => removeitem(each.cakeid)}>
              <span class="fa fa-remove"></span> Remove
            </button>
          </td>
          </tr> 
        )
      })
    }           
          
          
        
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>      
            <td>
              <button type="button" onClick={getcartdata} class="btn btn-success">
                  Checkout <span class="fa fa-play"></span>
              </button>
            </td> 
          </tr>
      </tbody>
    </table>
    :<Link to="/login"><button className="btn btn-warning">Login For Add To Cart</button></Link>}
  </div>
  );
}

Cart = withRouter(Cart)
export default connect(function(state,props){
    return{
        loginstatus:state?.isloggedin,
        carttt:state?.cartdata
    }
})(Cart)
