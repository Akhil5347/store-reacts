import React from "react";
import './st.css'

function Search(){
    return(
        <div className="wrap">
   <nav className="NavBar">
   <div className="logo"><a href="#"><img src="https://raw.githubusercontent.com/Cyber-Machine/Grocer-Ease/master/Assets/logo.png" alt="logo"/></a></div>
        <div className="searchbar">
            <form action="input.py">
                <input type="text" placeholder="Search" className="sbar"/>
            </form>
        </div><div class="Accounts">
            <a href="#">
            <img src="https://raw.githubusercontent.com/Cyber-Machine/Grocer-Ease/master/Assets/acc.svg" alt=""/>
            </a>
        </div>
       
    </nav>
        </div>

    );
}
export default Search;