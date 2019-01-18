import React from "react";
//import App from "./Components/App";
import HomeSearch from "./homeSearch";
import Pages from "./pages";

import{
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";


class App extends React.Component{

   
   render(){
      return (
         <Router>
            <Route exact path = "/search" component={Pages}/>
         </Router>
      );
      
   }
}

export default App;

