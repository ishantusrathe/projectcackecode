import { connect } from "react-redux";


// ---------------Funcinality to check My order place in card summary---------------------//

function CartSummery(props)
{
    return(
        <div>
            <h2 style={{color:"#0c1241",fontStyle:"italic"}}>CART SUMMERY</h2>
            { props.cart?.length > 0 && props.cart.map((each, index)=>{
		          return (<div class="media">
            <img src={each.image}  class="mr-3" alt="..." style={{width:"150px",height:"100px"}}/>
            <div class="media-body">
                <h5 class="mt-0">{each.name}</h5>
                <p class="mt-0">quantity : {each.quantity}</p>
                <p>Total : {each.price}/-</p>
            </div>
            </div>
            )
        })
    }
        </div>
    )
}

export default connect(function(state,props){
    console.log(".........checkout state" , state)
    return {
        cart:state?.cartdata  
        
    }
})(CartSummery)