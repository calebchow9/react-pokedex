import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './HomePage';
import Gallery from './GalleryPage';
import Pokemon from './PokemonPage';

function App() {
  return (
    <Router basename="/react-pokedex">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/pokemon/:id" component={Pokemon} />
    </Switch>
    </Router>
  );
}

export default App;
