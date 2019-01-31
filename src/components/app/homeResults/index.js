import React from "react";



class HomeResults extends React.Component{

    state = {
        id: '',
        location:'',
        dates: '',
        team:''
    }

    componentDidMount(){
        let self = this;
        fetchDetails(this.props.match.params.id)
        .then(res=> res.json())
        .then(function(data){
            self.setState({
                id: data[0],
                name : data[1],
                alias: data[2],
                team : data[3]})
            });
    }
    
    render(){
        return(
            <div>
            <section>
                <h3> View Details </h3>
                <div> Name : {this.state.name} </div>
                <div> Alias : {this.state.alias} </div>
            </section>
            </div>
        )
    }
}

export default HomeResults;