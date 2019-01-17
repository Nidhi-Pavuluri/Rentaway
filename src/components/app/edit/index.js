import React from "react";

//import Parent from "./parent";

class Edit extends React.Component{
    render(){
        return (
           
               
              <section>
                  <h4>Edit Details</h4>
               <form>
                    Name:<input name = "name" type = "text"/>
                    <br/>
                    Alias:<input name = "alias" type = "text"/>
                    <br/>
                    Team:<input name = "team" type = "text"/>
                    <br/>
                    <input type = "submit" value = "submit"/>
               </form>
               </section>
               

        )
    }
}

export default Edit;