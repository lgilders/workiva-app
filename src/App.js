import React, { Component } from 'react';
import CardList from './components/CardList';
import GraphDisplay from './components/GraphDisplay';
import workivaData from './data/widgetdata.json';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/App.css';

class App extends Component {
  
  render() {
    return (
      <Router location="/">
        <div className="App">
          <h1>Workiva Data Transformation</h1>

          <NavBar></NavBar>

          <Switch>
            <Route
              path='/graphView'
              render={(props) => <GraphDisplay {...props} data={workivaData} />}/>
            <Route
              path='/cardView'
              render={(props) => <CardList {...props} data={workivaData} />}/>
            <Redirect from="/" to="/cardView" />
          </Switch>
          
        </div>
      </Router>
      
    );
  }
}

export default App;
