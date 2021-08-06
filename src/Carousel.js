
var carousel1="carousel1.jpeg"
var carousel2="carousel2.jpeg"
var carousel3="carousel3.jpeg"

var carouselImage=
{
	height:"310px"
}
function Carousel() {
  return (
    <div style={{ paddingLeft:"15px"}} id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
	  <h2> Carousel Section </h2>
	  <div class="carousel-inner">
	    <div class="carousel-item active">
	        <img src={carousel1}  style={carouselImage} class="d-block w-100" alt="..."/>
	    </div>
	    <div class="carousel-item">
	      <img src={carousel2} style={carouselImage} class="d-block w-100" alt="..."/>
	    </div>
	    <div class="carousel-item">
	      <img src={carousel3} style={carouselImage} class="d-block w-100" alt="..."/>
	    </div>
	  </div>
	</div>
  );
}

export default Carousel;
