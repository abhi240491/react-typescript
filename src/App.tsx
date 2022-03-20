import React, {useState} from 'react';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import NewsDashboard from './components/Dashboard';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<SignIn/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/dashboard" element={<NewsDashboard/>}/>
      </Routes>
    </BrowserRouter>
    /* //add router for sign-in sign-up and dashboard pages.
    isAuthenticated?
    (<div className="signin">
      <SignIn/>
    </div>):
    (<div className="signup">
      <Signup/>
    </div>) */
  );
}

export default App;
