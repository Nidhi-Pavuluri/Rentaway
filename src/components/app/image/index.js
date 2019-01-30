import React from "react"
import "./index.css"
import NavBar from "../navBar"
import HomeSearch from "../homeSearch";

  

class  Image extends React.Component{

    
    render(){
        
        return(
            <div>
        <NavBar/>
        <HomeSearch/>
        </div>           
     
        );
    }

    }

export default Image;