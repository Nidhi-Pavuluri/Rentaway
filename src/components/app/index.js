import React from "react";
//import App from "./Components/App";
import SearchBar from "./searchBar";
import HomePreSignin from "./homePreSignin"

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
               <Route exact path = "/searchBar" component={SearchBar}/>
               <Route exact path = "/homePreSignin" component={HomePreSignin}/>
               <Redirect to = "/homePreSignin" component={HomePreSignin}/>
            </Switch>

         </Router>
      );
      
   }
}

export default App;

