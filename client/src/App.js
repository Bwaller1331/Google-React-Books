import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Wrapper from './components/wrapper';
import Saved from './components/SavedBooks';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path ="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
   
  );
}

export default App;
