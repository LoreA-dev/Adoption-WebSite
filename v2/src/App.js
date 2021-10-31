import React from 'react' 
import Navbar from './components/Navbar/index.js'
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import HomeContainerView from './containers/HomeView'
import './App.css';
import './constants.css'
import AnimalCareView from './containers/AnimalCareView/index.js';

function App() {
  return (
    <div className="App">
      <Router path="/">
        <Navbar/>
        <div className="views-container">
          <Route exact path="/home"
            component={HomeContainerView}
          />
          <Route exact path="/animal-care"
            component={AnimalCareView}/>
          <Route exact path="/pets"/>
          {/* Aqui el codigo de lo demas */}
        </div>
      </Router>

    </div>
  );
}

export default App;
