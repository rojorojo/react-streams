import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import history from './history';
import './App.css';


import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import StreamList from './components/streams/StreamList';

class App extends Component {
  render() {
    return (
      <div className="container app-container">
        
        <Router history={history}>
          <Header />
          <div className="app-content">
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>          
          </div>
        </Router>
      </div>
      
      
    );
  }
}

export default App;
