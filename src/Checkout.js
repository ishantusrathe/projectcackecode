import { Route } from "react-router";
import CartSummery from './CartSummery';
import Address from './Address';
import Payment from './Payment';
import Order from './Order';
import { Link ,useHistory,useRouteMatch} from "react-router-dom"
import './assets/css/style.css';

/*---------------------------------------Check Out Function -------------------*/

function Checkout(){
    var route =useRouteMatch()
    var url = route.url
    var path =route.path
    console.log("......",route)
    
    return(        
        <div className="row">
            <div className="col-4 aside">
                <ul>
                  <Link to={url}><li className="btn btn-primary">Cart Summery</li></Link><br/><br/> 
                  <Link to={url+"/address"}> <li className="btn btn-info">Address</li></Link><br/><br/>
                  <Link to={url+"/order"}> <li className="btn btn-warning">Order</li></Link><br/><br/>
                  <Link to={url+"/payment"}> <li className="btn btn-success">Payment</li></Link>    
                </ul>
            </div>
            
            <div className="col-8">
                <Route exact path={path} component={CartSummery}></Route>
                <Route exact path={path+"/address"} component={Address}></Route>
                <Route exact path={path+"/order"} component={Order}></Route>
                <Route exact path={path+"/payment"} component={Payment}></Route>
            </div>
        </div>
        
    )
}
export default Checkout