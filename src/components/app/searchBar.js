import React from "react";
import HomePreSigninPage from "./homePreSigninPage";
import { Router } from "react-router";
import { createBrowserHistory as createHistory } from "history";

class SearchBar extends React.Component{
   
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)     
        }
    
    history = createHistory(this.props);
    handleSubmit(event){
        event.preventDefault();
        this.props.history.push(`/homePreSigninPage`)

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