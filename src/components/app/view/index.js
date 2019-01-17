import React from "react";

//import Parent from "./parent";

class View extends React.Component{
    render(){
        return (
           <section>
               <h3>View Detail</h3>
               <div>Name: {this.props.selectedRecord.name}</div>
               <div>Alias:{this.props.selectedRecord.alias}</div>
               <div>Team: {this.props.selectedRecord.team}</div>       
           </section>
        )
    }
}

export default View;