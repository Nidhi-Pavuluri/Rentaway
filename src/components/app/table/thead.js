import React from "react";

import Row from "./row";

class Thead extends React.Component{
    render(){
        //console.debug("thead" + values);
        return (
            <thead>
                <Row isHeader={true} values = {this.props.values}/>
                
            </thead>
        )
    }

}

export default Thead;