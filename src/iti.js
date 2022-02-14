import React from "react";
import "./bt.css";
import "./st.css";

function Bas(){
    return(
        <div>
            <h2  className="yoyo">Shop By Category</h2> 
            <div className="container">
            <div className="box">
    <h2>Vegetables</h2>
    <img src="https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="vegetables" className="veg"/>
   
    <br/><button>Shop Now</button>
  </div>
  <div className="box">
    <h2>Fruits</h2>
    <img src="https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="vegetables" className="veg"/>
   
    <br/><button>Shop Now</button>
  </div>
  <div className="box">
    <h3>Grain Supplies</h3>
    <img src="https://images.pexels.com/photos/1192053/pexels-photo-1192053.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="vegetables" className="veg"/>
   
    <br/><button className="a">Shop Now</button>
  </div>
  <div className="box">
    <h2>Ice Creams</h2>
    <img src="https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="vegetables" className="veg"/>
   
    <br/><button>Shop Now</button>
  </div></div>
  </div>
    );
}
export default Bas;