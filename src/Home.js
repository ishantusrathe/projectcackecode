
import React, { useState, useEffect } from 'react';
import Cake from './Cake'
import Carousel from './Carousel'
import cakesfromdatafile from './data.js'
import axios from "axios"
var carousel_card="carousel_card.jpeg"
var obj={
	name:"cnb",
	image:"carousel_card.jpeg"
}

// ------------------------------------CAll api for show all cacke information after HOme page load -----------------------//

function Home() {
  
  let [cakes,setCakes]=useState([])
  let apiurl="https://apibyashu.herokuapp.com/api/allcakes"                        // -----------------------api url------------//

  useEffect(() => {
        axios({
            url:apiurl,                                                            //---------------------------Call Api
            method:"get",
       }).then((response)=>{
          console.log("Response from AllCakes api",response.data)
          setCakes(response.data.data)
       },(error)=>{
          console.log("Error from AllCakes api",error)  
       })
  },[]);
           

  return ( 
    <>
    <Carousel/> 
    <div>
        <h2>All Cakes Section</h2>
	    <div className="row" style={{ paddingLeft:"30px"}}>
		    { cakes?.length > 0 && cakes.map((each, index)=>{         // -------------------CAll data in arrow function-----------------// 
		          return (<Cake cakedat={each} key={index}/>)
		        })
		    }
	   </div>
	</div>
  </>
  
  );
}

export default Home;
