import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'



// importing pages
import Index from "./pages/Index"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Thome from "./pages/Thome"
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';



const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/thome" component={Thome} />
      <Route path="/explore" component={Explore} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/messages" component={Messages} />
      <Route path="/bookmarks" component={Bookmarks} />
      <Route path="/lists" component={Lists} />
      <Route path="/profile" component={Profile} />
    </Router>
  )
}

export default App
