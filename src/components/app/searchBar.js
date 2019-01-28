import React from "react";
import HomePreSignin from "./homePreSignin";

class SearchBar extends React.Component{
    state = {
        toDashboard: false,
    }
    handleSubmit(event){
        event.preventDefault();
        //this.history.push(`/homePreSignin`)

    }
    render() {


        return (

            <form onSubmit={this.handleSubmit} >
                <input type="text" name="location"/>
                <input type="text" name="dates" />
                <input type="submit" value="search" />
            </form>


        );

    }
}
export default SearchBar;