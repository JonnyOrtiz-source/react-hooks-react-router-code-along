import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Login from './Login';
import SignUp from './Signup';
import Messages from './Messages';

function App() {
   return (
      <>
         <NavBar />
         <Switch>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/login">
               <Login />
            </Route>
            <Route path="/signup">
               <SignUp />
            </Route>
            <Route path="/messages">
               <Messages />
            </Route>

            <Route exact path="/">
               <Home />
            </Route>
         </Switch>
      </>
   );
}

ReactDOM.render(
   <Router>
      <App />
   </Router>,
   document.getElementById('root')
);
