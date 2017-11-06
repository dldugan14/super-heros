import React, { Component } from 'react';
import './App.css';
import SuperHeros from './superheroes.js';

class App extends Component {
  state = {
    title: "Super Heroes",
    heroes: SuperHeros.HEROES
  };

  render() {
    const heroesList = this.state.heroes.map(function(hero, index) {
      return (
        <li>
          <span className="badge">{index}:</span> {hero.superhero}
        </li>
      );
    });
    console.log(heroesList);
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <ul className= "heroes">{heroesList}</ul>
      </div>
    );
  }
}

export default App;