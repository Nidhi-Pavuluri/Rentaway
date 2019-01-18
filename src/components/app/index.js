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
            <Switch>            
               <Route exact path = "/search" component={Pages}/>
               <Route exact path = "/homeSearch" component={HomeSearch}/>
               <Redirect to = "/homeSearch" />
            </Switch>

         </Router>
      );
      
   }
}

export default App;

