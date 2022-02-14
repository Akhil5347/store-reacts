import React,{useContext} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  
function Vas() {
  return (
    <div style={{ display: 'block', width: 1590, padding: 10 }}>
      
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            
src="https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w"
            alt="Image One" className="img1"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="img1"
src="https://images.pexels.com/photos/4174773/pexels-photo-4174773.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Image Two"
          />
          
        </Carousel.Item>
      </Carousel>
      <h1 className="ast">The Authentic store</h1>
      <h2 className="bst">2499, 4th Street, Massachusetts-	02138
</h2 >
    </div>
  );
}
export default Vas;


