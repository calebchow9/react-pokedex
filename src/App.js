import React from 'react';
import './App.css';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Home from './HomePage';
import Gallery from './GalleryPage';
import Pokemon from './PokemonPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/pokemon/:id" component={Pokemon} />
    </Switch>
    </Router>
  );
}

export default App;
