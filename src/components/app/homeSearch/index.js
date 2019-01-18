import React from "react";

class HomeSearch extends React.Component{
render(){
    return(
        <center>
            <form >
                <input type = "text" name = "location" />
                <input type = "text" name = "dates" />
                <input type = "submit" value = "search"/>
            </form> 
        </center>
        
    )
}

}

export default HomeSearch;