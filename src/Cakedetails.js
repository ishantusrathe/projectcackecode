
import React from 'react'
import axios from 'axios'
import {useEffect , useState} from "react";
import {useParams,Link} from "react-router-dom";
var img="carousel_card.jpeg";
function Cakedetails(props) {
    var cartAdd = {}
    var[Addcart , setAddcart] = useState({})

    let [cakeDetails,setcakeDetails]=useState([])
    let  params= useParams()
      useEffect(()=>{
          let allcakedetailapi="https://apibyashu.herokuapp.com/api/cake/"+params.cakeid
          axios({
          url:allcakedetailapi,
          method:"get"
          
      }).then((response)=>{
          console.log("response from  cake details  api" ,response.data)
          setcakeDetails(response.data.data)
      },(error)=>{
          console.log("error from cake details api",error)
      })
      },[])


    var addCart = function(){   
      var cartdetail={
          cakeid:cakeDetails.cakeid, 
          image:cakeDetails.image,
          name:cakeDetails.name,
          price:cakeDetails.price, 
          weight:cakeDetails.weight     
      }
      console.log("added cake details" ,cartdetail)
      var token = localStorage.token
      let cartapi="https://apibyashu.herokuapp.com/api/addcaketocart"
      axios({
          url:cartapi,
          method:"post",
          data:cartdetail,
          headers:{
              authtoken:token
            } 
      }).then((response)=>{
          console.log("response from add to cart api" , response.data)
          //alert(response.data)
          setAddcart(response.data.data)
          
      },(error)=>{
          console.log("error from add to cart api" , error)
      })
  } 

  return (
    <div className="cakedetails" style={{ marginTop:"20px",paddingLeft:"30px"}}>
    <h2>Cake Details Section</h2>
	    <div className="row">
         <div className="col-md-6">
           <img src={cakeDetails.image} style={{height:"250px",width:"390px"}} className="card-img-top" alt="..." />
         </div>

         <div className="col-md-6">
           <p>NAME:- {cakeDetails.name} </p>           
           <p>TYPE:- {cakeDetails.type} </p>           
           <p>LIKES:- {cakeDetails.likes} </p>           
           <p>REVIEWS:- {cakeDetails.reviews} </p>           
           <p>RATINGS:- {cakeDetails.ratings} </p>           
           <p>PRICE:-{cakeDetails.price}/- Rs Only</p>
           <p>INGRIDIENTS:-{cakeDetails.ingredients}</p>
           <p>DESCRIPTIONS:-{cakeDetails.description}</p>
           <div><button className="btn btn-success text-center" onClick={addCart}>ADD TO CART</button></div> 
         </div>
	      </div>
      </div>
  );
}

export default Cakedetails;
