import React from "react";
//import App from "./Components/App";
import HomeSearch from "./homeSearch";
import Pages from "./pages";
import HomePreSignin from "./pages/homePreSignin"

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
               <Route exact path = "/homePreSignin" component={HomePreSignin}/>
               <Redirect to = "/homePreSignin" component={HomePreSignin}/>
            </Switch>

         </Router>
      );
      
   }
}

export default App;

