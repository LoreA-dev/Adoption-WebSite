import React from 'react' 
import Navbar from './components/Navbar/index.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainerView from './containers/HomeView'
import PetsContainerView from './containers/PetsView'
import './App.css';
import './constants.css'

function App() {
  return (
    <div className="App">
      <Router path="/">
        <Navbar/>
        <div className="views-container">
          <Route exact path="/home"
            component={HomeContainerView}
          />
          <Route exact path="/blogs"/>
          <Route exact path="/pets" component={PetsContainerView}/>
          {/* Aqui el codigo de lo demas */}
        </div>
      </Router>

    </div>
  );
}

export default App;
