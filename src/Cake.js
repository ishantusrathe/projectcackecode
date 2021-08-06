import { Link } from "react-router-dom"
function Cake(props) {
  return (
    <div className="card">
     <Link to={`/cakedetails/${props.cakedat.cakeid}`}>	
    	<img src={props.cakedat.image} style={{ width: "17rem",height:"200px" }} className="card-img-top" alt="..." />
    	<p><h3>{props.cakedat.name}</h3></p>
     </Link>	
    </div>	


    /*<img src={props.image} className="card-img-top" alt="..." /> use direct props 
	<img src={props.cakedat.image} className="card-img-top" alt="..." /> use direct props*/ 
  );
}

export default Cake;
