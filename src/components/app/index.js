import React from "react";
//import App from "./Components/App";
import HomeSearch from "./homeSearch";
import SearchBar from "./searchBar";
import HomePreSignin from "./homePreSignin";
//import LoginPage from "./signupLogin";

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
               <Route exact path = "/homeSearch" component={HomeSearch}/>
               <Route exact path = "/homePreSignin" component={HomePreSignin}/>
               {/* <Route exact path = "/signupLogin" component={LoginPage}/> */}
               <Redirect to = "/homePreSignin" component={HomePreSignin}/>
            </Switch>

         </Router>
      );
      
   }
}

export default App;

