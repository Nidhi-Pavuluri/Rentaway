import React from "react";
import HomePreSignin from "./homePreSignin";
import { Router } from "react-router";
import { createBrowserHistory as createHistory } from "history";

class SearchBar extends React.Component{
   
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.onLocationChange = this.onLocationChange.bind(this) 
        this.onDatesChange = this.onDatesChange.bind(this)

        this.state = {
            location : props.location,
            dates : props.dates,
        }
        }
        onLocationChange(event){
            console.log(event.target.value)
            this.setState({location: event.target.value}) 
        }
    
        onDatesChange(event){
            console.log(event.target.value)
            this.setState({dates: event.target.value}) 
        }
    
    history = createHistory(this.props);
    handleSubmit(event){
        event.preventDefault();
        this.props.history.push(`/homePreSignin`)

    }
    render() {


        return (

            <form onSubmit={this.handleSubmit} >
                <input type="text" name="location" onChange = {this.onLocationChange}/>
                <input type="text" name="dates" onChange={this.onDatesChange}/>
                <input type="submit" value="search" />
            </form>


        );

    }
}
export default SearchBar;